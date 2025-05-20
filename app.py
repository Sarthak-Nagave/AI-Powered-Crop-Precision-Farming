import os
import json
import pandas as pd
import numpy as np
import joblib
import logging
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import requests
from model_utils import preprocess_input

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Initialize Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "default-secret-key")
CORS(app)

# Load model and necessary data files
try:
    model = joblib.load('crop_recommendation_model.pkl')
    encoder = joblib.load('label_encoder.pkl')
    onehot_encoder = joblib.load('onehot_encoder.pkl')
    scaler = joblib.load('scaler.pkl')
    metrics = json.load(open('model_metrics.json', 'r'))
    logger.info("Model and encoders loaded successfully")
    logger.info(f"Model metrics: {metrics}")
except Exception as e:
    logger.error(f"Error loading model or encoders: {e}")
    model = None
    encoder = None
    onehot_encoder = None
    scaler = None
    metrics = {"accuracy": "N/A", "precision": "N/A", "recall": "N/A", "f1": "N/A"}

# Weather API settings
WEATHER_API_KEY = os.environ.get("WEATHER_API_KEY", "default_key")
WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather"

@app.route('/')
def home():
    """Render the home page"""
    return render_template('index.html', metrics=metrics)

@app.route('/get_weather', methods=['POST'])
def get_weather():
    """Get weather data from coordinates"""
    try:
        data = request.json
        lat = data.get('latitude')
        lon = data.get('longitude')
        
        if not lat or not lon:
            return jsonify({"error": "Latitude and longitude are required"}), 400
        
        params = {
            'lat': lat,
            'lon': lon,
            'appid': WEATHER_API_KEY,
            'units': 'metric'  # Temperature in Celsius
        }
        
        response = requests.get(WEATHER_API_URL, params=params)
        weather_data = response.json()
        
        if response.status_code != 200:
            return jsonify({"error": f"Weather API error: {weather_data.get('message', 'Unknown error')}"}), response.status_code
        
        # Extract relevant weather data
        result = {
            'temperature': weather_data['main']['temp'],
            'humidity': weather_data['main']['humidity'],
            'weather_condition': weather_data['weather'][0]['main'],
            'description': weather_data['weather'][0]['description']
        }
        
        return jsonify(result)
    
    except Exception as e:
        logger.error(f"Error getting weather data: {e}")
        return jsonify({"error": f"Error: {str(e)}"}), 500

@app.route('/predict', methods=['POST'])
def predict():
    """Predict the best crop based on input parameters"""
    if model is None:
        return jsonify({"error": "Model not loaded"}), 500
    
    try:
        data = request.json
        
        # Extract features
        features = {
            'N': float(data.get('nitrogen')),
            'P': float(data.get('phosphorus')),
            'K': float(data.get('potassium')),
            'temperature': float(data.get('temperature')),
            'humidity': float(data.get('humidity')),
            'ph': float(data.get('ph')),
            'rainfall': float(data.get('rainfall')),
            'soil_type': data.get('soil_type')
        }
        
        # Preprocess input
        X = preprocess_input(features, scaler, onehot_encoder)
        
        # Make prediction
        prediction = model.predict(X)
        predicted_crop = encoder.inverse_transform(prediction)[0]
        
        # Get prediction probabilities
        probabilities = model.predict_proba(X)[0]
        # Get top 3 crops
        top_indices = np.argsort(probabilities)[::-1][:3]
        top_crops = [
            {
                "crop": encoder.inverse_transform([idx])[0],
                "probability": round(float(probabilities[idx] * 100), 2)
            }
            for idx in top_indices
        ]
        
        return jsonify({
            "predicted_crop": predicted_crop,
            "top_crops": top_crops
        })
        
    except Exception as e:
        logger.error(f"Error making prediction: {e}")
        return jsonify({"error": f"Error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
