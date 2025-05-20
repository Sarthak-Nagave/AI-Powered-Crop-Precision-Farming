// Speech recognition variables
let recognition;
let isListening = false;
const speechRecognitionSupported = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;

// Initialize speech recognition
function initSpeechRecognition() {
    if (!speechRecognitionSupported) {
        document.getElementById('start-voice-btn').disabled = true;
        document.getElementById('voice-status-text').textContent = getTranslation('voice_not_supported');
        return false;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    
    // Set recognition properties
    recognition.continuous = true;
    recognition.interimResults = true;
    
    // Set language based on current selection
    setRecognitionLanguage();
    
    // Recognition event handlers
    recognition.onstart = function() {
        isListening = true;
        document.getElementById('start-voice-btn').disabled = true;
        document.getElementById('stop-voice-btn').disabled = false;
        document.getElementById('voice-status-text').textContent = getTranslation('voice_listening');
        document.getElementById('voice-status').classList.add('listening');
        document.getElementById('voice-transcript').classList.remove('d-none');
    };
    
    recognition.onend = function() {
        isListening = false;
        document.getElementById('start-voice-btn').disabled = false;
        document.getElementById('stop-voice-btn').disabled = true;
        document.getElementById('voice-status-text').textContent = getTranslation('voice_stopped');
        document.getElementById('voice-status').classList.remove('listening');
    };
    
    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        document.getElementById('voice-status-text').textContent = `${getTranslation('voice_error')}: ${event.error}`;
        stopVoiceInput();
    };
    
    recognition.onresult = function(event) {
        let interimTranscript = '';
        let finalTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
                processVoiceCommand(transcript.trim());
            } else {
                interimTranscript += transcript;
            }
        }
        
        document.getElementById('transcript-text').innerHTML = 
            finalTranscript + '<span style="color: gray;">' + interimTranscript + '</span>';
    };
    
    return true;
}

// Start voice input
function startVoiceInput() {
    if (!recognition) {
        if (!initSpeechRecognition()) {
            return;
        }
    }
    
    try {
        recognition.start();
    } catch (e) {
        console.error('Speech recognition error:', e);
        document.getElementById('voice-status-text').textContent = getTranslation('voice_error');
    }
}

// Stop voice input
function stopVoiceInput() {
    if (recognition && isListening) {
        recognition.stop();
    }
}

// Set recognition language based on current selection
function setRecognitionLanguage() {
    if (!recognition) return;
    
    switch(currentLanguage) {
        case 'hi':
            recognition.lang = 'hi-IN';
            break;
        case 'mr':
            recognition.lang = 'mr-IN';
            break;
        default:
            recognition.lang = 'en-US';
    }
}

// Process voice commands
function processVoiceCommand(transcript) {
    const lowerTranscript = transcript.toLowerCase();
    
    // Detect and extract numbers from the voice input
    const numberRegex = /\d+(\.\d+)?/g;
    const numbers = lowerTranscript.match(numberRegex);
    
    // Process commands based on the current language
    switch(currentLanguage) {
        case 'hi':
            processHindiCommand(lowerTranscript, numbers);
            break;
        case 'mr':
            processMarathiCommand(lowerTranscript, numbers);
            break;
        default:
            processEnglishCommand(lowerTranscript, numbers);
    }
}

// Process English voice commands
function processEnglishCommand(transcript, numbers) {
    // Check for specific field mentions
    if (transcript.includes('nitrogen') && numbers && numbers.length > 0) {
        document.getElementById('nitrogen').value = numbers[0];
    }
    else if (transcript.includes('phosphorus') && numbers && numbers.length > 0) {
        document.getElementById('phosphorus').value = numbers[0];
    }
    else if (transcript.includes('potassium') && numbers && numbers.length > 0) {
        document.getElementById('potassium').value = numbers[0];
    }
    else if ((transcript.includes('temperature') || transcript.includes('temp')) && numbers && numbers.length > 0) {
        document.getElementById('temperature').value = numbers[0];
    }
    else if (transcript.includes('humidity') && numbers && numbers.length > 0) {
        document.getElementById('humidity').value = numbers[0];
    }
    else if (transcript.includes('ph') || transcript.includes('p h') || transcript.includes('ph value') && numbers && numbers.length > 0) {
        document.getElementById('ph').value = numbers[0];
    }
    else if (transcript.includes('rainfall') && numbers && numbers.length > 0) {
        document.getElementById('rainfall').value = numbers[0];
    }
    else if (transcript.includes('soil')) {
        if (transcript.includes('sandy')) {
            document.getElementById('soil-type').value = 'sandy';
        }
        else if (transcript.includes('loamy')) {
            document.getElementById('soil-type').value = 'loamy';
        }
        else if (transcript.includes('clay')) {
            document.getElementById('soil-type').value = 'clay';
        }
    }
    else if (transcript.includes('submit') || transcript.includes('predict') || transcript.includes('recommend')) {
        if (cropForm.checkValidity()) {
            submitForm();
        } else {
            cropForm.classList.add('was-validated');
            document.getElementById('voice-status-text').textContent = getTranslation('voice_form_invalid');
        }
    }
    else if (transcript.includes('reset') || transcript.includes('clear')) {
        resetForm();
    }
    else if (transcript.includes('location')) {
        getLocation();
    }
}

// Process Hindi voice commands
function processHindiCommand(transcript, numbers) {
    // Check for specific field mentions in Hindi
    if ((transcript.includes('नाइट्रोजन') || transcript.includes('नाइट्रोजेन')) && numbers && numbers.length > 0) {
        document.getElementById('nitrogen').value = numbers[0];
    }
    else if (transcript.includes('फॉस्फोरस') && numbers && numbers.length > 0) {
        document.getElementById('phosphorus').value = numbers[0];
    }
    else if (transcript.includes('पोटैशियम') && numbers && numbers.length > 0) {
        document.getElementById('potassium').value = numbers[0];
    }
    else if (transcript.includes('तापमान') && numbers && numbers.length > 0) {
        document.getElementById('temperature').value = numbers[0];
    }
    else if (transcript.includes('नमी') || transcript.includes('आर्द्रता') && numbers && numbers.length > 0) {
        document.getElementById('humidity').value = numbers[0];
    }
    else if (transcript.includes('पीएच') || transcript.includes('पी एच') && numbers && numbers.length > 0) {
        document.getElementById('ph').value = numbers[0];
    }
    else if (transcript.includes('वर्षा') || transcript.includes('बारिश') && numbers && numbers.length > 0) {
        document.getElementById('rainfall').value = numbers[0];
    }
    else if (transcript.includes('मिट्टी')) {
        if (transcript.includes('बलुई')) {
            document.getElementById('soil-type').value = 'sandy';
        }
        else if (transcript.includes('दोमट')) {
            document.getElementById('soil-type').value = 'loamy';
        }
        else if (transcript.includes('चिकनी')) {
            document.getElementById('soil-type').value = 'clay';
        }
    }
    else if (transcript.includes('सबमिट') || transcript.includes('भविष्यवाणी') || transcript.includes('अनुमान') || transcript.includes('सिफारिश')) {
        if (cropForm.checkValidity()) {
            submitForm();
        } else {
            cropForm.classList.add('was-validated');
            document.getElementById('voice-status-text').textContent = getTranslation('voice_form_invalid');
        }
    }
    else if (transcript.includes('रीसेट') || transcript.includes('साफ') || transcript.includes('क्लियर')) {
        resetForm();
    }
    else if (transcript.includes('स्थान') || transcript.includes('लोकेशन')) {
        getLocation();
    }
}

// Process Marathi voice commands
function processMarathiCommand(transcript, numbers) {
    // Check for specific field mentions in Marathi
    if (transcript.includes('नायट्रोजन') && numbers && numbers.length > 0) {
        document.getElementById('nitrogen').value = numbers[0];
    }
    else if (transcript.includes('फॉस्फरस') && numbers && numbers.length > 0) {
        document.getElementById('phosphorus').value = numbers[0];
    }
    else if (transcript.includes('पोटॅशियम') && numbers && numbers.length > 0) {
        document.getElementById('potassium').value = numbers[0];
    }
    else if (transcript.includes('तापमान') && numbers && numbers.length > 0) {
        document.getElementById('temperature').value = numbers[0];
    }
    else if (transcript.includes('आर्द्रता') && numbers && numbers.length > 0) {
        document.getElementById('humidity').value = numbers[0];
    }
    else if (transcript.includes('पीएच') || transcript.includes('पी एच') && numbers && numbers.length > 0) {
        document.getElementById('ph').value = numbers[0];
    }
    else if (transcript.includes('पाऊस') || transcript.includes('पाउस') && numbers && numbers.length > 0) {
        document.getElementById('rainfall').value = numbers[0];
    }
    else if (transcript.includes('माती')) {
        if (transcript.includes('वाळू') || transcript.includes('वाळवंटी')) {
            document.getElementById('soil-type').value = 'sandy';
        }
        else if (transcript.includes('चिकण माती')) {
            document.getElementById('soil-type').value = 'loamy';
        }
        else if (transcript.includes('चिकट माती')) {
            document.getElementById('soil-type').value = 'clay';
        }
    }
    else if (transcript.includes('सबमिट') || transcript.includes('अंदाज') || transcript.includes('शिफारस')) {
        if (cropForm.checkValidity()) {
            submitForm();
        } else {
            cropForm.classList.add('was-validated');
            document.getElementById('voice-status-text').textContent = getTranslation('voice_form_invalid');
        }
    }
    else if (transcript.includes('रीसेट') || transcript.includes('क्लिअर')) {
        resetForm();
    }
    else if (transcript.includes('स्थान') || transcript.includes('लोकेशन')) {
        getLocation();
    }
}

// Initialize speech synthesis for result speaking
function speakText(text, language = 'en-US') {
    if (!('speechSynthesis' in window)) {
        console.error('Speech synthesis not supported');
        return;
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    speechSynthesis.speak(utterance);
}
