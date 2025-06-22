# Crop Recommendation System

## Overview

This is a Flask-based web application that provides crop recommendations using machine learning. The system analyzes soil nutrients, environmental conditions, and climate data to suggest the most suitable crop for a given field. It features a user-friendly web interface with multi-language support and integrates with weather APIs for real-time environmental data.

## System Architecture

The application follows a traditional three-tier architecture:

### Frontend Architecture
- **Framework**: HTML5 with Bootstrap 5 for responsive design
- **Styling**: Bootstrap dark theme with custom CSS
- **JavaScript**: Vanilla JavaScript for interactivity, including:
  - Form validation and submission
  - Multi-language support (English, Hindi, Marathi)
  - Voice input functionality using Web Speech API
  - Geolocation and weather data integration
- **Templates**: Jinja2 templating engine with Flask

### Backend Architecture
- **Framework**: Flask (Python 3.11)
- **Web Server**: Gunicorn for production deployment
- **CORS**: Flask-CORS for cross-origin requests
- **Model Serving**: Joblib for loading pre-trained scikit-learn models

### Machine Learning Pipeline
- **Algorithm**: Random Forest Classifier
- **Features**: Soil nutrients (N, P, K), environmental conditions (temperature, humidity, pH, rainfall), and soil type
- **Preprocessing**: StandardScaler for numerical features, OneHotEncoder for categorical features
- **Target**: Multi-class classification for crop types (rice, wheat, sugarcane, cotton, etc.)

## Key Components

### Core Application Files
- `main.py`: Application entry point
- `app.py`: Flask application configuration and route definitions
- `model_utils.py`: Machine learning utilities for data preprocessing and model training
- `train_model.py`: Model training script

### Machine Learning Assets
- `crop_recommendation_model.pkl`: Trained Random Forest model
- `label_encoder.pkl`: Target variable encoder
- `onehot_encoder.pkl`: Categorical feature encoder
- `scaler.pkl`: Numerical feature scaler
- `model_metrics.json`: Model performance metrics
- `cropdata.csv`: Training dataset

### Web Interface
- `templates/landing.html`: Home page with hero section
- `templates/input.html`: Data input form
- `templates/results.html`: Prediction results display
- `static/`: CSS, JavaScript, and image assets

## Data Flow

1. **User Input**: Users provide soil and environmental data through the web form
2. **Optional Weather Integration**: Users can fetch real-time weather data using geolocation
3. **Data Preprocessing**: Input data is scaled and encoded using saved preprocessing objects
4. **Prediction**: Processed data is fed to the Random Forest model
5. **Result Display**: Predicted crop recommendation is displayed with confidence metrics

## External Dependencies

### Core Python Packages
- `flask`: Web framework
- `scikit-learn`: Machine learning library
- `pandas`: Data manipulation
- `numpy`: Numerical computing
- `joblib`: Model serialization
- `requests`: HTTP client for API calls

### Optional Integrations
- **Weather API**: OpenWeatherMap API for real-time weather data
- **Geolocation**: Browser-based location services

### Frontend Dependencies
- **Bootstrap 5**: UI framework with dark theme
- **Bootstrap Icons**: Icon library
- **Web Speech API**: Voice input functionality

## Deployment Strategy

### Development Environment
- **Runtime**: Python 3.11 with Nix package management
- **Local Server**: Flask development server with auto-reload
- **Port**: 5000 (mapped to external port 80)

### Production Deployment
- **Server**: Gunicorn WSGI server
- **Configuration**: Auto-scaling deployment target
- **Binding**: 0.0.0.0:5000 with port reuse
- **Process Management**: Parallel workflow execution

### Environment Configuration
- **Secret Key**: Configurable via SESSION_SECRET environment variable
- **Weather API**: Configurable via WEATHER_API_KEY environment variable
- **Database**: PostgreSQL support configured (ready for future database integration)

## Changelog

- June 22, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.