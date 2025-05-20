// Translations for the application
const translations = {
    // English translations
    en: {
        // Hero section
        hero_title: "Find the perfect crop for your field",
        hero_subtitle: "Get accurate crop recommendations based on soil and climate conditions using our advanced machine learning model.",
        get_started: "Get Started",
        learn_more: "Learn More",
        
        // Info cards
        weather_title: "Weather Integration",
        weather_text: "Automatically fetch current weather conditions based on your location to provide accurate recommendations.",
        voice_title: "Voice Input & Output",
        voice_text: "Speak to input your data and receive recommendations using our voice-enabled interface in multiple languages.",
        ml_title: "AI-Powered Predictions",
        ml_text: "Our machine learning model analyzes soil properties and environmental conditions to recommend the best crops.",
        
        // Form sections
        form_title: "Enter Your Field Data",
        soil_nutrients_title: "Soil Nutrients",
        nitrogen_label: "Nitrogen (N) in kg/ha",
        phosphorus_label: "Phosphorus (P) in kg/ha",
        potassium_label: "Potassium (K) in kg/ha",
        env_conditions_title: "Environmental Conditions",
        soil_type_label: "Soil Type",
        soil_type_placeholder: "Select soil type",
        ph_label: "pH Value",
        temperature_label: "Temperature (°C)",
        humidity_label: "Humidity (%)",
        rainfall_label: "Rainfall (mm)",
        
        // Location section
        location_title: "Location & Weather",
        location_info_text: "Click \"Get My Location\" to automatically fill weather data based on your current location.",
        latitude_label: "Latitude",
        longitude_label: "Longitude",
        get_location_text: "Get My Location",
        
        // Weather data
        weather_data_title: "Current Weather",
        weather_temp_label: "Temperature",
        weather_humidity_label: "Humidity",
        weather_condition_label: "Condition",
        use_weather_label: "Use this weather data for prediction",
        
        // Voice input
        voice_input_title: "Voice Input",
        voice_instructions: "Click the microphone button and speak the values for each field.",
        start_voice_text: "Start Voice Input",
        stop_voice_text: "Stop",
        voice_ready: "Ready for voice input",
        voice_listening: "Listening... Speak now",
        voice_stopped: "Voice input stopped",
        voice_error: "Voice recognition error",
        voice_not_supported: "Voice recognition not supported in this browser",
        voice_form_invalid: "Please fill all required fields correctly",
        transcript_label: "Recognized Speech:",
        
        // Form validation messages
        nitrogen_feedback: "Please enter a valid nitrogen value (0-150 kg/ha).",
        phosphorus_feedback: "Please enter a valid phosphorus value (0-150 kg/ha).",
        potassium_feedback: "Please enter a valid potassium value (0-200 kg/ha).",
        soil_type_feedback: "Please select a soil type.",
        ph_feedback: "Please enter a valid pH value (0-14).",
        temperature_feedback: "Please enter a valid temperature (0-50°C).",
        humidity_feedback: "Please enter a valid humidity value (0-100%).",
        rainfall_feedback: "Please enter a valid rainfall amount (0-300 mm).",
        
        // Buttons
        reset_text: "Reset",
        predict_text: "Get Recommendation",
        predict_loading_text: "Predicting...",
        
        // Results section
        results_title: "Crop Recommendation Results",
        best_crop_label: "Best Crop for Your Field",
        alternatives_label: "Alternative Crops",
        input_summary_label: "Input Summary",
        summary_n_label: "Nitrogen (N):",
        summary_p_label: "Phosphorus (P):",
        summary_k_label: "Potassium (K):",
        summary_ph_label: "pH Value:",
        summary_temp_label: "Temperature:",
        summary_humidity_label: "Humidity:",
        summary_rainfall_label: "Rainfall:",
        summary_soil_label: "Soil Type:",
        speak_result_text: "Speak Result",
        back_text: "Back to Form",
        new_prediction_text: "New Prediction",
        
        // Model metrics
        metrics_title: "Model Performance Metrics",
        accuracy_label: "Accuracy",
        precision_label: "Precision",
        recall_label: "Recall",
        f1_label: "F1 Score",
        
        // Modal content
        about_system_title: "How This System Works",
        about_system_text: "This crop recommendation system uses a machine learning model trained on thousands of agricultural data points to suggest the most suitable crops for your specific conditions. The model analyzes soil nutrients (N, P, K), environmental factors (temperature, humidity, rainfall), and soil properties (pH, soil type) to make accurate predictions.",
        about_features_title: "Key Features",
        feature_1: "Voice input and output in multiple languages (English, Hindi, Marathi)",
        feature_2: "Real-time weather data integration based on your location",
        feature_3: "Advanced machine learning algorithm for accurate predictions",
        feature_4: "Alternative crop suggestions with confidence scores",
        about_soil_title: "Understanding Soil Types",
        sandy_title: "Sandy Soil",
        sandy_text: "Light, warm and dry soil with high drainage and low nutrient content.",
        loamy_title: "Loamy Soil",
        loamy_text: "Balanced mixture of sand, silt and clay with good drainage and nutrient retention.",
        clay_title: "Clay Soil",
        clay_text: "Heavy, nutrient-rich soil with poor drainage that retains moisture well.",
        close_modal_btn: "Close",
        
        // Footer
        footer_copyright: "© 2023 Crop Recommendation System",
        footer_disclaimer: "For educational purposes only. Always consult with agricultural experts."
    },
    
    // Hindi translations
    hi: {
        // Hero section
        hero_title: "अपने खेत के लिए सबसे उपयुक्त फसल खोजें",
        hero_subtitle: "हमारे उन्नत मशीन लर्निंग मॉडल का उपयोग करके मिट्टी और जलवायु स्थितियों के आधार पर सटीक फसल अनुशंसाएँ प्राप्त करें।",
        get_started: "शुरू करें",
        learn_more: "अधिक जानकारी",
        
        // Info cards
        weather_title: "मौसम इंटीग्रेशन",
        weather_text: "सटीक अनुशंसाएँ प्रदान करने के लिए अपने स्थान के आधार पर वर्तमान मौसम की स्थिति स्वचालित रूप से प्राप्त करें।",
        voice_title: "आवाज इनपुट और आउटपुट",
        voice_text: "हमारे आवाज-सक्षम इंटरफेस का उपयोग करके कई भाषाओं में अपना डेटा इनपुट करने और अनुशंसाएँ प्राप्त करने के लिए बोलें।",
        ml_title: "AI-संचालित भविष्यवाणियाँ",
        ml_text: "हमारा मशीन लर्निंग मॉडल सर्वोत्तम फसलों की अनुशंसा करने के लिए मिट्टी के गुणों और पर्यावरणीय परिस्थितियों का विश्लेषण करता है।",
        
        // Form sections
        form_title: "अपने खेत का डेटा दर्ज करें",
        soil_nutrients_title: "मिट्टी के पोषक तत्व",
        nitrogen_label: "नाइट्रोजन (N) किग्रा/हेक्टेयर",
        phosphorus_label: "फास्फोरस (P) किग्रा/हेक्टेयर",
        potassium_label: "पोटैशियम (K) किग्रा/हेक्टेयर",
        env_conditions_title: "पर्यावरण की स्थिति",
        soil_type_label: "मिट्टी का प्रकार",
        soil_type_placeholder: "मिट्टी का प्रकार चुनें",
        ph_label: "पीएच मान",
        temperature_label: "तापमान (°C)",
        humidity_label: "आर्द्रता (%)",
        rainfall_label: "वर्षा (मिमी)",
        
        // Location section
        location_title: "स्थान और मौसम",
        location_info_text: "अपने वर्तमान स्थान के आधार पर मौसम डेटा स्वचालित रूप से भरने के लिए \"मेरा स्थान प्राप्त करें\" पर क्लिक करें।",
        latitude_label: "अक्षांश",
        longitude_label: "देशांतर",
        get_location_text: "मेरा स्थान प्राप्त करें",
        
        // Weather data
        weather_data_title: "वर्तमान मौसम",
        weather_temp_label: "तापमान",
        weather_humidity_label: "आर्द्रता",
        weather_condition_label: "स्थिति",
        use_weather_label: "भविष्यवाणी के लिए इस मौसम डेटा का उपयोग करें",
        
        // Voice input
        voice_input_title: "आवाज़ इनपुट",
        voice_instructions: "प्रत्येक फ़ील्ड के मान बोलने के लिए माइक्रोफ़ोन बटन पर क्लिक करें।",
        start_voice_text: "आवाज़ इनपुट शुरू करें",
        stop_voice_text: "रोकें",
        voice_ready: "आवाज़ इनपुट के लिए तैयार",
        voice_listening: "सुन रहा है... अब बोलें",
        voice_stopped: "आवाज़ इनपुट रुक गया",
        voice_error: "आवाज़ पहचान त्रुटि",
        voice_not_supported: "इस ब्राउज़र में आवाज़ पहचान समर्थित नहीं है",
        voice_form_invalid: "कृपया सभी आवश्यक फ़ील्ड सही ढंग से भरें",
        transcript_label: "पहचानी गई वाणी:",
        
        // Form validation messages
        nitrogen_feedback: "कृपया एक वैध नाइट्रोजन मान दर्ज करें (0-150 किग्रा/हेक्टेयर)।",
        phosphorus_feedback: "कृपया एक वैध फास्फोरस मान दर्ज करें (0-150 किग्रा/हेक्टेयर)।",
        potassium_feedback: "कृपया एक वैध पोटैशियम मान दर्ज करें (0-200 किग्रा/हेक्टेयर)।",
        soil_type_feedback: "कृपया मिट्टी का प्रकार चुनें।",
        ph_feedback: "कृपया एक वैध पीएच मान दर्ज करें (0-14)।",
        temperature_feedback: "कृपया एक वैध तापमान दर्ज करें (0-50°C)।",
        humidity_feedback: "कृपया एक वैध आर्द्रता मान दर्ज करें (0-100%)।",
        rainfall_feedback: "कृपया एक वैध वर्षा राशि दर्ज करें (0-300 मिमी)।",
        
        // Buttons
        reset_text: "रीसेट",
        predict_text: "अनुशंसा प्राप्त करें",
        predict_loading_text: "भविष्यवाणी कर रहा है...",
        
        // Results section
        results_title: "फसल अनुशंसा परिणाम",
        best_crop_label: "आपके खेत के लिए सबसे अच्छी फसल",
        alternatives_label: "वैकल्पिक फसलें",
        input_summary_label: "इनपुट सारांश",
        summary_n_label: "नाइट्रोजन (N):",
        summary_p_label: "फास्फोरस (P):",
        summary_k_label: "पोटैशियम (K):",
        summary_ph_label: "पीएच मान:",
        summary_temp_label: "तापमान:",
        summary_humidity_label: "आर्द्रता:",
        summary_rainfall_label: "वर्षा:",
        summary_soil_label: "मिट्टी का प्रकार:",
        speak_result_text: "परिणाम बोलें",
        back_text: "फॉर्म पर वापस जाएँ",
        new_prediction_text: "नई भविष्यवाणी",
        
        // Model metrics
        metrics_title: "मॉडल प्रदर्शन मेट्रिक्स",
        accuracy_label: "सटीकता",
        precision_label: "परिशुद्धता",
        recall_label: "रिकॉल",
        f1_label: "F1 स्कोर",
        
        // Modal content
        about_system_title: "यह सिस्टम कैसे काम करता है",
        about_system_text: "यह फसल अनुशंसा प्रणाली आपकी विशिष्ट परिस्थितियों के लिए सबसे उपयुक्त फसलों का सुझाव देने के लिए हजारों कृषि डेटा बिंदुओं पर प्रशिक्षित एक मशीन लर्निंग मॉडल का उपयोग करती है। मॉडल सटीक भविष्यवाणियां करने के लिए मिट्टी के पोषक तत्वों (N, P, K), पर्यावरणीय कारकों (तापमान, आर्द्रता, वर्षा) और मिट्टी के गुणों (पीएच, मिट्टी का प्रकार) का विश्लेषण करता है।",
        about_features_title: "प्रमुख विशेषताएं",
        feature_1: "कई भाषाओं में आवाज इनपुट और आउटपुट (अंग्रेजी, हिंदी, मराठी)",
        feature_2: "आपके स्थान के आधार पर रीयल-टाइम मौसम डेटा एकीकरण",
        feature_3: "सटीक भविष्यवाणियों के लिए उन्नत मशीन लर्निंग एल्गोरिदम",
        feature_4: "विश्वास स्कोर के साथ वैकल्पिक फसल सुझाव",
        about_soil_title: "मिट्टी के प्रकारों को समझना",
        sandy_title: "बलुई मिट्टी",
        sandy_text: "हल्की, गर्म और सूखी मिट्टी जिसमें उच्च जल निकासी और कम पोषक तत्व होते हैं।",
        loamy_title: "दोमट मिट्टी",
        loamy_text: "रेत, गाद और मिट्टी का संतुलित मिश्रण जिसमें अच्छी जल निकासी और पोषक तत्व प्रतिधारण है।",
        clay_title: "चिकनी मिट्टी",
        clay_text: "भारी, पोषक तत्वों से भरपूर मिट्टी जिसमें खराब जल निकासी होती है जो नमी को अच्छी तरह से बनाए रखती है।",
        close_modal_btn: "बंद करें",
        
        // Footer
        footer_copyright: "© 2023 फसल अनुशंसा प्रणाली",
        footer_disclaimer: "केवल शैक्षिक उद्देश्यों के लिए। हमेशा कृषि विशेषज्ञों से परामर्श करें।"
    },
    
    // Marathi translations
    mr: {
        // Hero section
        hero_title: "तुमच्या शेतासाठी उत्कृष्ट पीक शोधा",
        hero_subtitle: "आमच्या प्रगत मशीन लर्निंग मॉडेलचा वापर करून माती आणि हवामान परिस्थितींवर आधारित अचूक पीक शिफारसी मिळवा.",
        get_started: "सुरु करा",
        learn_more: "अधिक जाणून घ्या",
        
        // Info cards
        weather_title: "हवामान एकीकरण",
        weather_text: "अचूक शिफारसी देण्यासाठी तुमच्या स्थानावर आधारित सध्याच्या हवामानाची स्थिती आपोआप मिळवा.",
        voice_title: "आवाज इनपुट आणि आउटपुट",
        voice_text: "आमच्या व्हॉइस-सक्षम इंटरफेसचा वापर करून अनेक भाषांमध्ये तुमचा डेटा इनपुट करण्यासाठी आणि शिफारसी मिळवण्यासाठी बोला.",
        ml_title: "AI-संचालित भविष्यवाण्या",
        ml_text: "आमचे मशीन लर्निंग मॉडेल सर्वोत्तम पिकांची शिफारस करण्यासाठी मातीच्या गुणधर्मांचे आणि पर्यावरणीय परिस्थितींचे विश्लेषण करते.",
        
        // Form sections
        form_title: "तुमच्या शेताचा डेटा प्रविष्ट करा",
        soil_nutrients_title: "माती पोषक तत्त्वे",
        nitrogen_label: "नायट्रोजन (N) किलो/हेक्टर",
        phosphorus_label: "फॉस्फरस (P) किलो/हेक्टर",
        potassium_label: "पोटॅशियम (K) किलो/हेक्टर",
        env_conditions_title: "पर्यावरणीय परिस्थिती",
        soil_type_label: "माती प्रकार",
        soil_type_placeholder: "माती प्रकार निवडा",
        ph_label: "पीएच मूल्य",
        temperature_label: "तापमान (°C)",
        humidity_label: "आर्द्रता (%)",
        rainfall_label: "पाऊस (मिमी)",
        
        // Location section
        location_title: "स्थान आणि हवामान",
        location_info_text: "तुमच्या सध्याच्या स्थानावर आधारित हवामान डेटा स्वयंचलितपणे भरण्यासाठी \"माझे स्थान मिळवा\" वर क्लिक करा.",
        latitude_label: "अक्षांश",
        longitude_label: "रेखांश",
        get_location_text: "माझे स्थान मिळवा",
        
        // Weather data
        weather_data_title: "सध्याचे हवामान",
        weather_temp_label: "तापमान",
        weather_humidity_label: "आर्द्रता",
        weather_condition_label: "स्थिती",
        use_weather_label: "भविष्यवाणीसाठी या हवामान डेटाचा वापर करा",
        
        // Voice input
        voice_input_title: "आवाज इनपुट",
        voice_instructions: "प्रत्येक फील्डसाठी मूल्ये बोलण्यासाठी मायक्रोफोन बटणावर क्लिक करा.",
        start_voice_text: "आवाज इनपुट सुरू करा",
        stop_voice_text: "थांबवा",
        voice_ready: "आवाज इनपुटसाठी तयार",
        voice_listening: "ऐकत आहे... आता बोला",
        voice_stopped: "आवाज इनपुट थांबले",
        voice_error: "आवाज ओळख त्रुटी",
        voice_not_supported: "या ब्राउझरमध्ये आवाज ओळख समर्थित नाही",
        voice_form_invalid: "कृपया सर्व आवश्यक फील्ड्स योग्यरित्या भरा",
        transcript_label: "ओळखलेली भाषण:",
        
        // Form validation messages
        nitrogen_feedback: "कृपया वैध नायट्रोजन मूल्य प्रविष्ट करा (0-150 किलो/हेक्टर).",
        phosphorus_feedback: "कृपया वैध फॉस्फरस मूल्य प्रविष्ट करा (0-150 किलो/हेक्टर).",
        potassium_feedback: "कृपया वैध पोटॅशियम मूल्य प्रविष्ट करा (0-200 किलो/हेक्टर).",
        soil_type_feedback: "कृपया माती प्रकार निवडा.",
        ph_feedback: "कृपया वैध पीएच मूल्य प्रविष्ट करा (0-14).",
        temperature_feedback: "कृपया वैध तापमान प्रविष्ट करा (0-50°C).",
        humidity_feedback: "कृपया वैध आर्द्रता मूल्य प्रविष्ट करा (0-100%).",
        rainfall_feedback: "कृपया वैध पावसाचे प्रमाण प्रविष्ट करा (0-300 मिमी).",
        
        // Buttons
        reset_text: "रीसेट",
        predict_text: "शिफारस मिळवा",
        predict_loading_text: "भविष्यवाणी करत आहे...",
        
        // Results section
        results_title: "पीक शिफारस परिणाम",
        best_crop_label: "तुमच्या शेतासाठी सर्वोत्तम पीक",
        alternatives_label: "पर्यायी पिके",
        input_summary_label: "इनपुट सारांश",
        summary_n_label: "नायट्रोजन (N):",
        summary_p_label: "फॉस्फरस (P):",
        summary_k_label: "पोटॅशियम (K):",
        summary_ph_label: "पीएच मूल्य:",
        summary_temp_label: "तापमान:",
        summary_humidity_label: "आर्द्रता:",
        summary_rainfall_label: "पाऊस:",
        summary_soil_label: "माती प्रकार:",
        speak_result_text: "परिणाम बोला",
        back_text: "फॉर्मकडे परत जा",
        new_prediction_text: "नवीन भविष्यवाणी",
        
        // Model metrics
        metrics_title: "मॉडेल कार्यक्षमता मेट्रिक्स",
        accuracy_label: "अचूकता",
        precision_label: "प्रिसिजन",
        recall_label: "रिकॉल",
        f1_label: "F1 स्कोर",
        
        // Modal content
        about_system_title: "ही प्रणाली कशी काम करते",
        about_system_text: "ही पीक शिफारस प्रणाली तुमच्या विशिष्ट परिस्थितींसाठी सर्वात योग्य पिकांचा सल्ला देण्यासाठी हजारो कृषी डेटा पॉइंट्सवर प्रशिक्षित मशीन लर्निंग मॉडेलचा वापर करते. मॉडेल अचूक भविष्यवाण्या करण्यासाठी माती पोषक तत्त्वे (N, P, K), पर्यावरणीय घटक (तापमान, आर्द्रता, पाऊस) आणि माती गुणधर्म (पीएच, माती प्रकार) यांचे विश्लेषण करते.",
        about_features_title: "मुख्य वैशिष्ट्ये",
        feature_1: "अनेक भाषांमध्ये आवाज इनपुट आणि आउटपुट (इंग्रजी, हिंदी, मराठी)",
        feature_2: "तुमच्या स्थानावर आधारित रिअल-टाइम हवामान डेटा एकीकरण",
        feature_3: "अचूक भविष्यवाण्यांसाठी प्रगत मशीन लर्निंग अल्गोरिदम",
        feature_4: "विश्वास स्कोरसह पर्यायी पीक सूचना",
        about_soil_title: "माती प्रकार समजून घेणे",
        sandy_title: "वाळूची माती",
        sandy_text: "हलकी, उबदार आणि कोरडी माती ज्यामध्ये उच्च निचरा आणि कमी पोषक तत्त्व आहेत.",
        loamy_title: "चिकणमाती",
        loamy_text: "वाळू, गाळ आणि चिकणमातीचे संतुलित मिश्रण ज्यामध्ये चांगला निचरा आणि पोषक तत्त्व धारणा आहे.",
        clay_title: "चिकट माती",
        clay_text: "जड, पोषक तत्त्वांनी समृद्ध माती ज्यामध्ये खराब निचरा आहे जी आर्द्रता चांगली टिकवून ठेवते.",
        close_modal_btn: "बंद करा",
        
        // Footer
        footer_copyright: "© 2023 पीक शिफारस प्रणाली",
        footer_disclaimer: "केवळ शैक्षणिक उद्देशांसाठी. नेहमी कृषी तज्ज्ञांचा सल्ला घ्या."
    }
};

// Get translation for a key based on current language
function getTranslation(key) {
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    
    // Fallback to English
    if (translations.en && translations.en[key]) {
        return translations.en[key];
    }
    
    // Return the key itself if no translation found
    return key;
}

// Change current language
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update all text elements with the new language
    updateAllTranslations();
    
    // Update active class on language buttons
    document.querySelectorAll('.language-selector .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.language-selector .btn[onclick="changeLanguage('${lang}')"]`).classList.add('active');
    
    // Update speech recognition language if active
    if (typeof setRecognitionLanguage === 'function') {
        setRecognitionLanguage();
    }
}

// Update text of an element based on its ID
function updateElementText(id, html = null) {
    const element = document.getElementById(id);
    if (element) {
        if (html !== null) {
            element.innerHTML = html;
        } else {
            const key = id.replace(/-/g, '_');
            const translation = getTranslation(key);
            element.textContent = translation;
        }
    }
}

// Update all translatable elements on the page
function updateAllTranslations() {
    // Hero section
    updateElementText('hero-title');
    updateElementText('hero-subtitle');
    updateElementText('get-started-btn');
    updateElementText('learn-more-btn');
    
    // Info cards
    updateElementText('weather-title');
    updateElementText('weather-text');
    updateElementText('voice-title');
    updateElementText('voice-text');
    updateElementText('ml-title');
    updateElementText('ml-text');
    
    // Form sections
    updateElementText('form-title');
    updateElementText('soil-nutrients-title');
    updateElementText('nitrogen-label');
    updateElementText('phosphorus-label');
    updateElementText('potassium-label');
    updateElementText('env-conditions-title');
    updateElementText('soil-type-label');
    updateElementText('soil-type-placeholder');
    updateElementText('ph-label');
    updateElementText('temperature-label');
    updateElementText('humidity-label');
    updateElementText('rainfall-label');
    
    // Location section
    updateElementText('location-title');
    updateElementText('location-info-text');
    updateElementText('latitude-label');
    updateElementText('longitude-label');
    updateElementText('get-location-text');
    
    // Weather data
    updateElementText('weather-data-title');
    updateElementText('weather-temp-label');
    updateElementText('weather-humidity-label');
    updateElementText('weather-condition-label');
    updateElementText('use-weather-label');
    
    // Voice input
    updateElementText('voice-input-title');
    updateElementText('voice-instructions');
    updateElementText('start-voice-text');
    updateElementText('stop-voice-text');
    updateElementText('voice-status-text');
    updateElementText('transcript-label');
    
    // Form validation messages
    updateElementText('nitrogen-feedback');
    updateElementText('phosphorus-feedback');
    updateElementText('potassium-feedback');
    updateElementText('soil-type-feedback');
    updateElementText('ph-feedback');
    updateElementText('temperature-feedback');
    updateElementText('humidity-feedback');
    updateElementText('rainfall-feedback');
    
    // Buttons
    updateElementText('reset-text');
    updateElementText('predict-text');
    
    // Results section
    updateElementText('results-title');
    updateElementText('best-crop-label');
    updateElementText('alternatives-label');
    updateElementText('input-summary-label');
    updateElementText('summary-n-label');
    updateElementText('summary-p-label');
    updateElementText('summary-k-label');
    updateElementText('summary-ph-label');
    updateElementText('summary-temp-label');
    updateElementText('summary-humidity-label');
    updateElementText('summary-rainfall-label');
    updateElementText('summary-soil-label');
    updateElementText('speak-result-text');
    updateElementText('back-text');
    updateElementText('new-prediction-text');
    
    // Model metrics
    updateElementText('metrics-title');
    updateElementText('accuracy-label');
    updateElementText('precision-label');
    updateElementText('recall-label');
    updateElementText('f1-label');
    
    // Modal content
    updateElementText('about-system-title');
    updateElementText('about-system-text');
    updateElementText('about-features-title');
    updateElementText('feature-1');
    updateElementText('feature-2');
    updateElementText('feature-3');
    updateElementText('feature-4');
    updateElementText('about-soil-title');
    updateElementText('sandy-title');
    updateElementText('sandy-text');
    updateElementText('loamy-title');
    updateElementText('loamy-text');
    updateElementText('clay-title');
    updateElementText('clay-text');
    updateElementText('close-modal-btn');
    
    // Footer
    updateElementText('footer-copyright');
    updateElementText('footer-disclaimer');
}
