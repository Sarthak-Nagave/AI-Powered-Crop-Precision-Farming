import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder, OneHotEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
import joblib
import json
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

def load_and_prepare_data(file_path):
    """Load and prepare data for training"""
    # Load the dataset
    df = pd.read_csv(file_path)
    
    # Split features and target
    X = df.drop(['Crop'], axis=1)
    y = df['Crop']
    
    # Encode categorical variables (soil_type)
    onehot_encoder = OneHotEncoder(sparse_output=False, handle_unknown='ignore')
    soil_type_encoded = onehot_encoder.fit_transform(X[['soil_type']])
    
    # Encode target variable
    label_encoder = LabelEncoder()
    y_encoded = label_encoder.fit_transform(y)
    
    # Scale numerical features
    scaler = StandardScaler()
    numerical_features = X.drop(['soil_type'], axis=1)
    X_scaled = scaler.fit_transform(numerical_features)
    
    # Combine numerical and categorical features
    X_processed = np.hstack((X_scaled, soil_type_encoded))
    
    return X_processed, y_encoded, scaler, label_encoder, onehot_encoder

def preprocess_input(features_dict, scaler, onehot_encoder):
    """Preprocess input data for prediction"""
    # Extract numerical features
    numerical_features = np.array([
        features_dict['N'], 
        features_dict['P'], 
        features_dict['K'], 
        features_dict['temperature'], 
        features_dict['humidity'], 
        features_dict['ph'], 
        features_dict['rainfall']
    ]).reshape(1, -1)
    
    # Scale numerical features
    scaled_numerical = scaler.transform(numerical_features)
    
    # One-hot encode soil type
    soil_type = np.array([[features_dict['soil_type']]])
    soil_encoded = onehot_encoder.transform(soil_type)
    
    # Combine features
    X_processed = np.hstack((scaled_numerical, soil_encoded))
    
    return X_processed

def train_and_evaluate_model(X, y):
    """Train and evaluate model"""
    # Split into training and test sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train a Random Forest model
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Make predictions on the test set
    y_pred = model.predict(X_test)
    
    # Calculate metrics
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred, average='weighted')
    recall = recall_score(y_test, y_pred, average='weighted')
    f1 = f1_score(y_test, y_pred, average='weighted')
    
    metrics = {
        'accuracy': round(accuracy, 4),
        'precision': round(precision, 4),
        'recall': round(recall, 4),
        'f1': round(f1, 4)
    }
    
    logger.info(f"Model training completed with metrics: {metrics}")
    
    return model, metrics, X_test, y_test
