// Global variables
let recognition;
let isListening = false;

// Initialize speech recognition
function initSpeechRecognition() {
    try {
        // Check for browser support
        if ('webkitSpeechRecognition' in window) {
            recognition = new webkitSpeechRecognition();
        } else if ('SpeechRecognition' in window) {
            recognition = new SpeechRecognition();
        } else {
            document.getElementById('voice-status').textContent = getTranslation('voice_not_supported');
            document.getElementById('voice-button').disabled = true;
            return false;
        }
        
        // Set recognition properties
        recognition.continuous = true;
        recognition.interimResults = true;
        setRecognitionLanguage();
        
        // Recognition events
        recognition.onstart = function() {
            isListening = true;
            document.getElementById('voice-status').textContent = getTranslation('voice_listening');
            document.getElementById('voice-status').classList.add('listening');
            document.getElementById('voice-transcript').classList.remove('d-none');
            document.getElementById('transcript-text').textContent = '';
            
            // Update button text
            document.getElementById('voice-button').innerHTML = `
                <i class="bi bi-mic-fill"></i>
            `;
            document.getElementById('voice-button-text').textContent = getTranslation('stop_voice_text');
        };
        
        recognition.onresult = function(event) {
            let finalTranscript = '';
            let interimTranscript = '';
            
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                    processVoiceCommand(finalTranscript);
                } else {
                    interimTranscript += transcript;
                }
            }
            
            // Display transcript
            document.getElementById('transcript-text').textContent = finalTranscript || interimTranscript;
        };
        
        recognition.onerror = function(event) {
            console.error("Speech recognition error:", event.error);
            document.getElementById('voice-status').textContent = getTranslation('voice_error');
            stopVoiceInput();
        };
        
        recognition.onend = function() {
            if (isListening) {
                // If we're still supposed to be listening, restart
                recognition.start();
            } else {
                document.getElementById('voice-status').textContent = getTranslation('voice_stopped');
                document.getElementById('voice-status').classList.remove('listening');
                
                // Update button text
                document.getElementById('voice-button').innerHTML = `
                    <i class="bi bi-mic"></i>
                `;
                document.getElementById('voice-button-text').textContent = getTranslation('start_voice_text');
            }
        };
        
        return true;
    } catch (error) {
        console.error("Error initializing speech recognition:", error);
        document.getElementById('voice-status').textContent = getTranslation('voice_not_supported');
        document.getElementById('voice-button').disabled = true;
        return false;
    }
}

// Start voice input
function startVoiceInput() {
    if (!recognition) {
        const initialized = initSpeechRecognition();
        if (!initialized) return;
    }
    
    isListening = true;
    recognition.start();
}

// Stop voice input
function stopVoiceInput() {
    if (recognition) {
        isListening = false;
        recognition.stop();
    }
}

// Toggle voice input
function toggleVoiceInput() {
    if (isListening) {
        stopVoiceInput();
    } else {
        startVoiceInput();
    }
}

// Set recognition language based on current language
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

// Process voice command
function processVoiceCommand(transcript) {
    if (!transcript) return;
    
    // Convert to lowercase
    const lowerTranscript = transcript.toLowerCase();
    
    // Extract numbers from the transcript
    const numbers = lowerTranscript.match(/\d+(\.\d+)?/g) || [];
    
    console.log("Voice command:", lowerTranscript);
    console.log("Extracted numbers:", numbers);
    
    // Process based on language
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

// Process English commands
function processEnglishCommand(transcript, numbers) {
    // Process nitrogen
    if (transcript.includes('nitrogen') && numbers.length > 0) {
        document.getElementById('nitrogen').value = numbers[0];
    } 
    
    // Process phosphorus
    else if (transcript.includes('phosphorus') && numbers.length > 0) {
        document.getElementById('phosphorus').value = numbers[0];
    }
    
    // Process potassium
    else if (transcript.includes('potassium') && numbers.length > 0) {
        document.getElementById('potassium').value = numbers[0];
    }
    
    // Process pH
    else if ((transcript.includes('ph') || transcript.includes('p h')) && numbers.length > 0) {
        document.getElementById('ph').value = numbers[0];
    }
    
    // Process temperature
    else if (transcript.includes('temperature') && numbers.length > 0) {
        document.getElementById('temperature').value = numbers[0];
    }
    
    // Process humidity
    else if (transcript.includes('humidity') && numbers.length > 0) {
        document.getElementById('humidity').value = numbers[0];
    }
    
    // Process rainfall
    else if (transcript.includes('rainfall') && numbers.length > 0) {
        document.getElementById('rainfall').value = numbers[0];
    }
    
    // Process soil type
    else if (transcript.includes('soil')) {
        if (transcript.includes('sandy')) {
            document.getElementById('soil-type').value = 'sandy';
        } else if (transcript.includes('loamy')) {
            document.getElementById('soil-type').value = 'loamy';
        } else if (transcript.includes('clay')) {
            document.getElementById('soil-type').value = 'clay';
        }
    }
    
    // Commands to control the form
    else if (transcript.includes('reset') || transcript.includes('clear')) {
        resetForm();
    } else if (transcript.includes('submit') || transcript.includes('predict') || transcript.includes('recommend')) {
        document.getElementById('predict-btn').click();
    } else if (transcript.includes('location') || transcript.includes('weather')) {
        getLocation();
    }
}

// Process Hindi commands
function processHindiCommand(transcript, numbers) {
    // Process nitrogen
    if (transcript.includes('नाइट्रोजन') && numbers.length > 0) {
        document.getElementById('nitrogen').value = numbers[0];
    } 
    
    // Process phosphorus
    else if (transcript.includes('फास्फोरस') && numbers.length > 0) {
        document.getElementById('phosphorus').value = numbers[0];
    }
    
    // Process potassium
    else if (transcript.includes('पोटैशियम') && numbers.length > 0) {
        document.getElementById('potassium').value = numbers[0];
    }
    
    // Process pH
    else if ((transcript.includes('पीएच') || transcript.includes('पी एच')) && numbers.length > 0) {
        document.getElementById('ph').value = numbers[0];
    }
    
    // Process temperature
    else if (transcript.includes('तापमान') && numbers.length > 0) {
        document.getElementById('temperature').value = numbers[0];
    }
    
    // Process humidity
    else if (transcript.includes('आर्द्रता') && numbers.length > 0) {
        document.getElementById('humidity').value = numbers[0];
    }
    
    // Process rainfall
    else if (transcript.includes('वर्षा') && numbers.length > 0) {
        document.getElementById('rainfall').value = numbers[0];
    }
    
    // Process soil type
    else if (transcript.includes('मिट्टी')) {
        if (transcript.includes('बलुई')) {
            document.getElementById('soil-type').value = 'sandy';
        } else if (transcript.includes('दोमट')) {
            document.getElementById('soil-type').value = 'loamy';
        } else if (transcript.includes('चिकनी')) {
            document.getElementById('soil-type').value = 'clay';
        }
    }
    
    // Commands to control the form
    else if (transcript.includes('रीसेट') || transcript.includes('साफ')) {
        resetForm();
    } else if (transcript.includes('जमा') || transcript.includes('भविष्यवाणी') || transcript.includes('अनुशंसा')) {
        document.getElementById('predict-btn').click();
    } else if (transcript.includes('स्थान') || transcript.includes('मौसम')) {
        getLocation();
    }
}

// Process Marathi commands
function processMarathiCommand(transcript, numbers) {
    // Process nitrogen
    if (transcript.includes('नायट्रोजन') && numbers.length > 0) {
        document.getElementById('nitrogen').value = numbers[0];
    } 
    
    // Process phosphorus
    else if (transcript.includes('फॉस्फरस') && numbers.length > 0) {
        document.getElementById('phosphorus').value = numbers[0];
    }
    
    // Process potassium
    else if (transcript.includes('पोटॅशियम') && numbers.length > 0) {
        document.getElementById('potassium').value = numbers[0];
    }
    
    // Process pH
    else if ((transcript.includes('पीएच') || transcript.includes('पी एच')) && numbers.length > 0) {
        document.getElementById('ph').value = numbers[0];
    }
    
    // Process temperature
    else if (transcript.includes('तापमान') && numbers.length > 0) {
        document.getElementById('temperature').value = numbers[0];
    }
    
    // Process humidity
    else if (transcript.includes('आर्द्रता') && numbers.length > 0) {
        document.getElementById('humidity').value = numbers[0];
    }
    
    // Process rainfall
    else if (transcript.includes('पाऊस') && numbers.length > 0) {
        document.getElementById('rainfall').value = numbers[0];
    }
    
    // Process soil type
    else if (transcript.includes('माती')) {
        if (transcript.includes('वाळू')) {
            document.getElementById('soil-type').value = 'sandy';
        } else if (transcript.includes('मध्यम')) {
            document.getElementById('soil-type').value = 'loamy';
        } else if (transcript.includes('चिकट')) {
            document.getElementById('soil-type').value = 'clay';
        }
    }
    
    // Commands to control the form
    else if (transcript.includes('रीसेट') || transcript.includes('पुसा')) {
        resetForm();
    } else if (transcript.includes('सादर') || transcript.includes('भविष्यवाणी') || transcript.includes('शिफारस')) {
        document.getElementById('predict-btn').click();
    } else if (transcript.includes('स्थान') || transcript.includes('हवामान')) {
        getLocation();
    }
}

// Speech synthesis for result
function speakText(text, language = 'en-US') {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language;
        speechSynthesis.speak(utterance);
    } else {
        console.error("Speech synthesis not supported by the browser");
    }
}

// Initialize speech recognition when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const voiceButton = document.getElementById('voice-button');
    if (voiceButton) {
        initSpeechRecognition();
    }
});