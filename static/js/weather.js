// Get user's location
function getLocation() {
    if (navigator.geolocation) {
        // Show loading indicator
        document.getElementById('location-btn').innerHTML = `
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span>${getTranslation('get_location_text')}...</span>
        `;
        document.getElementById('location-btn').disabled = true;
        
        // Get location
        navigator.geolocation.getCurrentPosition(showPosition, handleLocationError, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        });
    } else {
        alert(getTranslation('geolocation_not_supported'));
    }
}

// Show position and fetch weather data
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    // Update form fields
    document.getElementById('latitude').value = latitude.toFixed(6);
    document.getElementById('longitude').value = longitude.toFixed(6);
    
    // Fetch weather data
    fetchWeatherData(latitude, longitude);
}

// Handle geolocation error
function handleLocationError(error) {
    let errorMessage;
    
    switch(error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = getTranslation('location_denied');
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = getTranslation('location_unavailable');
            break;
        case error.TIMEOUT:
            errorMessage = getTranslation('location_timeout');
            break;
        default:
            errorMessage = getTranslation('location_error');
    }
    
    alert(errorMessage);
    
    // Reset button state
    document.getElementById('location-btn').innerHTML = `
        <i class="bi bi-geo-alt me-2"></i><span id="get-location-text">${getTranslation('get_location_text')}</span>
    `;
    document.getElementById('location-btn').disabled = false;
}

// Fetch weather data from API
function fetchWeatherData(latitude, longitude) {
    fetch('/get_weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latitude, longitude })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Weather API response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Update weather data display
        document.getElementById('weather-temperature').textContent = data.temperature.toFixed(1);
        document.getElementById('weather-humidity').textContent = data.humidity;
        document.getElementById('weather-condition').textContent = data.description;
        
        // Show weather data container
        document.getElementById('weather-data-container').style.display = 'block';
        
        // If checkbox is checked, update form fields with weather data
        if (document.getElementById('use-weather-data').checked) {
            document.getElementById('temperature').value = data.temperature.toFixed(1);
            document.getElementById('humidity').value = data.humidity;
        }
        
        // Add event listener to checkbox
        document.getElementById('use-weather-data').addEventListener('change', function() {
            if (this.checked) {
                document.getElementById('temperature').value = data.temperature.toFixed(1);
                document.getElementById('humidity').value = data.humidity;
            }
        });
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        alert(getTranslation('weather_error'));
    })
    .finally(() => {
        // Reset button state
        document.getElementById('location-btn').innerHTML = `
            <i class="bi bi-geo-alt me-2"></i><span id="get-location-text">${getTranslation('get_location_text')}</span>
        `;
        document.getElementById('location-btn').disabled = false;
    });
}

// Add translations for weather-related messages
if (!translations.en.geolocation_not_supported) {
    translations.en.geolocation_not_supported = "Geolocation is not supported by this browser.";
    translations.hi.geolocation_not_supported = "यह ब्राउज़र जियोलोकेशन का समर्थन नहीं करता है।";
    translations.mr.geolocation_not_supported = "या ब्राउझरद्वारे जिओलोकेशन समर्थित नाही.";
    
    translations.en.location_denied = "User denied the request for geolocation.";
    translations.hi.location_denied = "उपयोगकर्ता ने जियोलोकेशन के लिए अनुरोध से इनकार कर दिया।";
    translations.mr.location_denied = "वापरकर्त्याने जिओलोकेशनच्या विनंतीस नकार दिला.";
    
    translations.en.location_unavailable = "Location information is unavailable.";
    translations.hi.location_unavailable = "स्थान की जानकारी उपलब्ध नहीं है।";
    translations.mr.location_unavailable = "स्थान माहिती उपलब्ध नाही.";
    
    translations.en.location_timeout = "The request to get user location timed out.";
    translations.hi.location_timeout = "उपयोगकर्ता का स्थान प्राप्त करने का अनुरोध समय समाप्त हो गया।";
    translations.mr.location_timeout = "वापरकर्ता स्थान मिळविण्याची विनंती टाइमआउट झाली.";
    
    translations.en.location_error = "An unknown error occurred while retrieving location.";
    translations.hi.location_error = "स्थान प्राप्त करते समय एक अज्ञात त्रुटि हुई।";
    translations.mr.location_error = "स्थान मिळवताना एक अज्ञात त्रुटी आली.";
    
    translations.en.weather_error = "Could not fetch weather data. Please try again.";
    translations.hi.weather_error = "मौसम डेटा प्राप्त नहीं कर सका। कृपया पुनः प्रयास करें।";
    translations.mr.weather_error = "हवामान डेटा आणू शकलो नाही. कृपया पुन्हा प्रयत्न करा.";
}
