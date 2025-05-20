// DOM Elements
const cropForm = document.getElementById('crop-form');
const resultsSection = document.getElementById('results-section');
let currentLanguage = 'en';

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    // Initialize form validation
    cropForm.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (cropForm.checkValidity()) {
            submitForm();
        }
        
        cropForm.classList.add('was-validated');
    });
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Form submission
function submitForm() {
    // Get all form values
    const formData = {
        nitrogen: document.getElementById('nitrogen').value,
        phosphorus: document.getElementById('phosphorus').value,
        potassium: document.getElementById('potassium').value,
        temperature: document.getElementById('temperature').value,
        humidity: document.getElementById('humidity').value,
        ph: document.getElementById('ph').value,
        rainfall: document.getElementById('rainfall').value,
        soil_type: document.getElementById('soil-type').value
    };
    
    // Show loading state
    document.getElementById('predict-btn').innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span id="predict-loading-text">Predicting...</span>
    `;
    document.getElementById('predict-btn').disabled = true;
    
    // Send data to API
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayResults(data, formData);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while making the prediction. Please try again.');
    })
    .finally(() => {
        // Reset button state
        updateElementText('predict-btn', `<i class="bi bi-search me-1"></i><span id="predict-text">Get Recommendation</span>`);
        document.getElementById('predict-btn').disabled = false;
    });
}

// Display prediction results
function displayResults(data, formData) {
    // Update predicted crop
    document.getElementById('predicted-crop').textContent = data.predicted_crop;
    
    // Update alternative crops
    const alternativeCropsContainer = document.getElementById('alternative-crops');
    alternativeCropsContainer.innerHTML = '';
    
    data.top_crops.forEach(crop => {
        if (crop.crop !== data.predicted_crop) {
            const cropElement = document.createElement('div');
            cropElement.className = 'mb-3';
            cropElement.innerHTML = `
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <span>${crop.crop}</span>
                    <span>${crop.probability}%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: ${crop.probability}%;" 
                         aria-valuenow="${crop.probability}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            `;
            alternativeCropsContainer.appendChild(cropElement);
        }
    });
    
    // Update input summary
    document.getElementById('summary-nitrogen').textContent = formData.nitrogen + ' kg/ha';
    document.getElementById('summary-phosphorus').textContent = formData.phosphorus + ' kg/ha';
    document.getElementById('summary-potassium').textContent = formData.potassium + ' kg/ha';
    document.getElementById('summary-ph').textContent = formData.ph;
    document.getElementById('summary-temperature').textContent = formData.temperature + ' °C';
    document.getElementById('summary-humidity').textContent = formData.humidity + ' %';
    document.getElementById('summary-rainfall').textContent = formData.rainfall + ' mm';
    document.getElementById('summary-soil-type').textContent = formData.soil_type;
    
    // Show results section
    resultsSection.style.display = 'block';
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Hide results section
function hideResults() {
    resultsSection.style.display = 'none';
}

// Reset form
function resetForm() {
    cropForm.reset();
    cropForm.classList.remove('was-validated');
    document.getElementById('weather-data-container').style.display = 'none';
    document.getElementById('voice-transcript').classList.add('d-none');
    document.getElementById('voice-status-text').textContent = getTranslation('voice_ready');
    document.getElementById('voice-status').classList.remove('listening');
}

// Speak result
function speakResult() {
    const crop = document.getElementById('predicted-crop').textContent;
    let speakText;
    
    switch(currentLanguage) {
        case 'hi':
            speakText = `आपके खेत के लिए सबसे अच्छी फसल है ${crop}`;
            break;
        case 'mr':
            speakText = `तुमच्या शेतासाठी सर्वोत्तम पीक आहे ${crop}`;
            break;
        default:
            speakText = `The best crop for your field is ${crop}`;
    }
    
    const utterance = new SpeechSynthesisUtterance(speakText);
    
    // Set language for speech
    switch(currentLanguage) {
        case 'hi':
            utterance.lang = 'hi-IN';
            break;
        case 'mr':
            utterance.lang = 'mr-IN';
            break;
        default:
            utterance.lang = 'en-US';
    }
    
    speechSynthesis.speak(utterance);
}

// Scroll to form
function scrollToForm() {
    document.getElementById('input-form').scrollIntoView({ behavior: 'smooth' });
}

// Initialize the app
function initApp() {
    updateAllTranslations();
}

// Call init function when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
