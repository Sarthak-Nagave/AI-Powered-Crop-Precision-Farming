// Global variable for current language
var currentLanguage = 'en';

// Translations for the application
const translations = {
    // English translations
    en: {
        // Hero section
        hero_title: "Find the perfect crop for your field",
        hero_subtitle: "Get accurate crop recommendations based on soil and climate conditions using our advanced machine learning model.",
        get_started: "Get Started",
        learn_more: "Learn More",
        
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
        
        // Buttons
        reset_text: "Reset",
        predict_text: "Get Recommendation",
        predict_loading_text: "Predicting...",
        
        // Results section
        results_title: "Crop Recommendation Results",
        best_crop_label: "Best Crop for Your Field",
        alternatives_label: "Alternative Crops",
        input_summary_label: "Input Summary",
        speak_result_text: "Speak Result",
        back_text: "Back to Form",
        new_prediction_text: "New Prediction",
        home_page_text: "Home Page",
        
        // Units and labels
        summary_n_label: "Nitrogen (N):",
        summary_p_label: "Phosphorus (P):",
        summary_k_label: "Potassium (K):",
        summary_ph_label: "pH Value:",
        summary_temp_label: "Temperature:",
        summary_humidity_label: "Humidity:",
        summary_rainfall_label: "Rainfall:",
        summary_soil_label: "Soil Type:",
        kgha_unit1: "kg/ha",
        kgha_unit2: "kg/ha", 
        kgha_unit3: "kg/ha",
        celsius_unit: "°C",
        percent_unit1: "%",
        mm_unit: "mm",
        
        // Soil type options
        sandy_option: "Sandy",
        loamy_option: "Loamy",
        clay_option: "Clay"
    },
    
    // Hindi translations
    hi: {
        // Hero section
        hero_title: "अपने खेत के लिए सबसे उपयुक्त फसल खोजें",
        hero_subtitle: "हमारे उन्नत मशीन लर्निंग मॉडल का उपयोग करके मिट्टी और जलवायु स्थितियों के आधार पर सटीक फसल अनुशंसाएँ प्राप्त करें।",
        get_started: "शुरू करें",
        learn_more: "अधिक जानकारी",
        
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
        
        // Buttons
        reset_text: "रीसेट",
        predict_text: "अनुशंसा प्राप्त करें",
        predict_loading_text: "भविष्यवाणी कर रहा है...",
        
        // Results section
        results_title: "फसल अनुशंसा परिणाम",
        best_crop_label: "आपके खेत के लिए सबसे अच्छी फसल",
        alternatives_label: "वैकल्पिक फसलें",
        input_summary_label: "इनपुट सारांश",
        speak_result_text: "परिणाम बोलें",
        back_text: "फॉर्म पर वापस जाएँ",
        new_prediction_text: "नई भविष्यवाणी",
        home_page_text: "होम पेज",
        
        // Units and labels
        summary_n_label: "नाइट्रोजन (N):",
        summary_p_label: "फास्फोरस (P):",
        summary_k_label: "पोटैशियम (K):",
        summary_ph_label: "पीएच मान:",
        summary_temp_label: "तापमान:",
        summary_humidity_label: "आर्द्रता:",
        summary_rainfall_label: "वर्षा:",
        summary_soil_label: "मिट्टी का प्रकार:",
        kgha_unit1: "किग्रा/हेक्टेयर",
        kgha_unit2: "किग्रा/हेक्टेयर",
        kgha_unit3: "किग्रा/हेक्टेयर",
        celsius_unit: "°C",
        percent_unit1: "%",
        mm_unit: "मिमी",
        
        // Soil type options
        sandy_option: "बलुई",
        loamy_option: "दोमट",
        clay_option: "चिकनी"
    },
    
    // Marathi translations
    mr: {
        // Hero section
        hero_title: "तुमच्या शेतासाठी उत्कृष्ट पीक शोधा",
        hero_subtitle: "आमच्या प्रगत मशीन लर्निंग मॉडेलचा वापर करून माती आणि हवामान परिस्थितींवर आधारित अचूक पीक शिफारसी मिळवा.",
        get_started: "सुरु करा",
        learn_more: "अधिक जाणून घ्या",
        
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
        
        // Buttons
        reset_text: "रीसेट",
        predict_text: "शिफारस मिळवा",
        predict_loading_text: "भविष्यवाणी करत आहे...",
        
        // Results section
        results_title: "पीक शिफारस परिणाम",
        best_crop_label: "तुमच्या शेतासाठी सर्वोत्तम पीक",
        alternatives_label: "पर्यायी पिके",
        input_summary_label: "इनपुट सारांश",
        speak_result_text: "परिणाम बोला",
        back_text: "फॉर्मवर परत जा",
        new_prediction_text: "नवीन भविष्यवाणी",
        home_page_text: "होम पेज",
        
        // Units and labels
        summary_n_label: "नायट्रोजन (N):",
        summary_p_label: "फॉस्फरस (P):",
        summary_k_label: "पोटॅशियम (K):",
        summary_ph_label: "पीएच मूल्य:",
        summary_temp_label: "तापमान:",
        summary_humidity_label: "आर्द्रता:",
        summary_rainfall_label: "पाऊस:",
        summary_soil_label: "माती प्रकार:",
        kgha_unit1: "किलो/हेक्टर",
        kgha_unit2: "किलो/हेक्टर",
        kgha_unit3: "किलो/हेक्टर",
        celsius_unit: "°C",
        percent_unit1: "%",
        mm_unit: "मिमी",
        
        // Soil type options
        sandy_option: "वाळूयुक्त",
        loamy_option: "दोमट",
        clay_option: "चिकट"
    }
};

// Function to get translation based on key
function getTranslation(key) {
    if (!currentLanguage || !translations[currentLanguage] || !translations[currentLanguage][key]) {
        return translations['en'][key] || key;
    }
    return translations[currentLanguage][key];
}

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update active class on language buttons
    document.querySelectorAll('.language-selector .btn').forEach(btn => {
        if (btn.onclick.toString().includes(lang)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update all text elements
    updateAllTranslations();
    
    // If speech recognition is active, update its language
    if (typeof setRecognitionLanguage === 'function') {
        setRecognitionLanguage();
    }
}

// Update element text helper function
function updateElementText(id, html = null) {
    const element = document.getElementById(id);
    if (element) {
        if (html) {
            element.innerHTML = html;
        } else {
            const key = id.replace(/-/g, '_');
            const translation = getTranslation(key);
            if (translation && translation !== key) {
                element.textContent = translation;
            }
        }
    }
}

// Update all translations
function updateAllTranslations() {
    // Update all elements with IDs that match translation keys
    for (const key in translations['en']) {
        const elementId = key.replace(/_/g, '-');
        updateElementText(elementId);
    }
    
    // Update special elements
    // Placeholder for soil type select
    const soilTypeSelect = document.getElementById('soil-type');
    if (soilTypeSelect) {
        const firstOption = soilTypeSelect.options[0];
        if (firstOption && firstOption.disabled) {
            firstOption.textContent = getTranslation('soil_type_placeholder');
        }
        
        // Update soil type options
        const sandyOption = document.getElementById('sandy-option');
        const loamyOption = document.getElementById('loamy-option');
        const clayOption = document.getElementById('clay-option');
        
        if (sandyOption) sandyOption.textContent = getTranslation('sandy_option');
        if (loamyOption) loamyOption.textContent = getTranslation('loamy_option');
        if (clayOption) clayOption.textContent = getTranslation('clay_option');
    }
    
    // Update soil type value in results page
    const soilTypeValue = document.getElementById('soil-type-value');
    if (soilTypeValue) {
        const currentValue = soilTypeValue.textContent.trim().toLowerCase();
        if (currentValue === 'sandy') {
            soilTypeValue.textContent = getTranslation('sandy_option');
        } else if (currentValue === 'loamy') {
            soilTypeValue.textContent = getTranslation('loamy_option');
        } else if (currentValue === 'clay') {
            soilTypeValue.textContent = getTranslation('clay_option');
        }
    }
    
    // Update form validation messages
    updateValidationMessages();
}

// Update form validation messages
function updateValidationMessages() {
    // Get all elements with invalid-feedback class
    const feedbackElements = document.querySelectorAll('.invalid-feedback');
    feedbackElements.forEach(element => {
        const inputId = element.previousElementSibling.id;
        if (inputId) {
            const key = inputId + '_feedback';
            const translation = getTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        }
    });
}

// Initialize translations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateAllTranslations();
});