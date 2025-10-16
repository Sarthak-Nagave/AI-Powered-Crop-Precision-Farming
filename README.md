
# 🌾 AI-Powered Crop Precision Farming System

An intelligent farming solution that leverages **Machine Learning, IoT, and real-time data** to optimize crop selection, monitor environmental factors, and improve agricultural productivity.

---

## 🚀 Features

- 🌱 **Crop Recommendation System:** Suggests the best crop based on soil nutrients (N, P, K), pH, temperature, humidity, rainfall, and soil type.
- 🧠 **AI-Driven Predictions:** Users can train their own model using the provided dataset.
- 🌤️ **Live Weather Integration:** Fetches real-time weather data using OpenWeatherMap API.
- 📍 **GPS Autofill:** Detects user location to provide location-specific recommendations.
- 🎙️ **Voice Assistant:** Supports **Hindi, Marathi, and English** for input/output.
- 💻 **User-Friendly Interface:** Built with **Flask** backend and responsive **HTML, CSS, JavaScript** frontend.
- 📊 **Model Metrics Dashboard:** Displays model accuracy and performance metrics.

---

## 💾 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/Sarthak-Nagave/AI-Powered-Crop-Precision-Farming.git
cd AI-Powered-Crop-Precision-Farming
````

2. **Create and activate a virtual environment**

```bash
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate
```

3. **Install dependencies**

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

4. **Set environment variables** (replace with your keys)

```bash
set FLASK_APP=app.py          # Windows
export FLASK_APP=app.py       # Linux/Mac

set FLASK_ENV=development
export FLASK_ENV=development

set WEATHER_API_KEY=your_api_key_here
```

5. **Train or generate your model**

* The project does not include the pre-trained model due to GitHub size limits.
* You can train the model using the dataset included in `dataset/` folder or your own data.
* Save your trained model as `crop_recommendation_model.pkl` in the project root.

6. **Run the application**

```bash
python app.py
```

Then open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Flask (Python)
* **Machine Learning:** scikit-learn, pandas, numpy
* **APIs:** OpenWeatherMap API, GPS API
* **Voice Integration:** SpeechRecognition, gTTS
* **Database:** SQLite (optional, for logs or user queries)

---

## 🔮 Future Scope

* Integration with IoT soil sensors for real-time data.
* Drone-based crop health monitoring.
* Smart irrigation and automated farming suggestions.

---

## 👨‍💻 Author

**Sarthak Nagave**
B.Tech in Computer Science & Technology (AI)
Dr. Babasaheb Ambedkar Technological University, Pune

---

## 📌 Notes

* Users must train or generate their own ML model (`crop_recommendation_model.pkl`) and place it in the project root.
* The app supports multilingual voice commands for farmer-friendly usage.
* Works best with live internet for weather API and GPS.

```
