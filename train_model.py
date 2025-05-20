import os
import json
import joblib
import logging
from model_utils import load_and_prepare_data, train_and_evaluate_model

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

def train_model():
    """Train the crop recommendation model and save artifacts"""
    try:
        # Load and preprocess data
        logger.info("Loading and preprocessing data...")
        X, y, scaler, label_encoder, onehot_encoder = load_and_prepare_data('cropdata.csv')
        
        # Train and evaluate model
        logger.info("Training model...")
        model, metrics, X_test, y_test = train_and_evaluate_model(X, y)
        
        # Save model and artifacts
        logger.info("Saving model and artifacts...")
        joblib.dump(model, 'crop_recommendation_model.pkl')
        joblib.dump(scaler, 'scaler.pkl')
        joblib.dump(label_encoder, 'label_encoder.pkl')
        joblib.dump(onehot_encoder, 'onehot_encoder.pkl')
        
        # Save metrics
        with open('model_metrics.json', 'w') as f:
            json.dump(metrics, f)
        
        logger.info(f"Model training completed successfully. Metrics: {metrics}")
        logger.info(f"Files saved: crop_recommendation_model.pkl, scaler.pkl, label_encoder.pkl, onehot_encoder.pkl, model_metrics.json")
        
        return True
        
    except Exception as e:
        logger.error(f"Error training model: {e}")
        return False

if __name__ == "__main__":
    train_model()
