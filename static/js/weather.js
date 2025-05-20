// Get the user's current location using Geolocation API
function getLocation() {
    // Check if geolocation is supported by the browser
    if (navigator.geolocation) {
        document.getElementById('location-btn').innerHTML = `
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span>Getting location...</span>
        `;
        
        // Get current position
        navigator.geolocation.getCurrentPosition(showPosition, handleLocationError);
    } else {
        alert("Geolocation is not supported by this browser.");
        document.getElementById('location-btn').innerHTML = `
            <i class="bi bi-geo-alt me-2"></i><span id="get-location-text">Get My Location</span>
        `;
    }
}

// Process and display position data
function showPosition(position) {
    // Get coordinates
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    // Fill location fields
    document.getElementById('latitude').value = latitude;
    document.getElementById('longitude').value = longitude;
    
    // Fetch weather data based on coordinates
    fetchWeatherData(latitude, longitude);
    
    // Reset button text
    document.getElementById('location-btn').innerHTML = `
        <i class="bi bi-geo-alt me-2"></i><span id="get-location-text">Get My Location</span>
    `;
    
    // Update translation for the button text
    if (typeof updateElementText === 'function') {
        updateElementText('get-location-text');
    }
}

// Handle location errors
function handleLocationError(error) {
    let errorMessage;
    
    switch(error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "User denied the request for geolocation. Please enable location services in your browser settings.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable. Please try again.";
            break;
        case error.TIMEOUT:
            errorMessage = "The request to get user location timed out. Please try again.";
            break;
        case error.UNKNOWN_ERROR:
            errorMessage = "An unknown error occurred while trying to get location. Please try again.";
            break;
    }
    
    alert(errorMessage);
    
    // Reset button text
    document.getElementById('location-btn').innerHTML = `
        <i class="bi bi-geo-alt me-2"></i><span id="get-location-text">Get My Location</span>
    `;
    
    // Update translation for the button text
    if (typeof updateElementText === 'function') {
        updateElementText('get-location-text');
    }
}

// Fetch weather data from API
function fetchWeatherData(latitude, longitude) {
    // Show weather loading state
    document.getElementById('weather-data-container').innerHTML = `
        <div class="text-center p-4">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-2">Loading weather data...</p>
        </div>
    `;
    
    // Make the container visible
    document.getElementById('weather-data-container').style.display = 'block';
    
    // Send request to backend
    fetch('/get_weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            latitude: latitude,
            longitude: longitude
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Weather API request failed');
        }
        return response.json();
    })
    .then(data => {
        // Fill weather data in the form
        document.getElementById('temperature').value = data.temperature;
        document.getElementById('humidity').value = data.humidity;
        
        // Display weather data in the container
        document.getElementById('weather-data-container').innerHTML = `
            <div class="card-body">
                <h5 class="card-title" id="weather-data-title">Current Weather</h5>
                <div class="row">
                    <div class="col-md-4">
                        <p><strong id="weather-temp-label">Temperature</strong>: ${data.temperature} °C</p>
                    </div>
                    <div class="col-md-4">
                        <p><strong id="weather-humidity-label">Humidity</strong>: ${data.humidity}%</p>
                    </div>
                    <div class="col-md-4">
                        <p><strong id="weather-condition-label">Condition</strong>: ${data.weather_condition}</p>
                    </div>
                </div>
                <p class="text-muted">${data.description}</p>
            </div>
        `;
        
        // Update translations for weather data labels
        if (typeof updateElementText === 'function') {
            updateElementText('weather-data-title');
            updateElementText('weather-temp-label');
            updateElementText('weather-humidity-label');
            updateElementText('weather-condition-label');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        
        // Display error message
        document.getElementById('weather-data-container').innerHTML = `
            <div class="alert alert-danger" role="alert">
                <h5>Error loading weather data</h5>
                <p>${error.message}</p>
                <button type="button" class="btn btn-sm btn-outline-danger mt-2" onclick="getLocation()">
                    <i class="bi bi-arrow-clockwise me-1"></i>Try Again
                </button>
            </div>
        `;
    });
}