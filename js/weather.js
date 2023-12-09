const API_KEY = 'da47fca64a4716327d7f1f21e37d9ca2';

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector('#weather span:first-child');
            const cityContainer = document.querySelector('#weather span:last-child');
            if (data.weather[0].main === 'Clear') {
                data.weather[0].main = '🌞';
            } else {
            }
            weatherContainer.innerText = `${data.weather[0].main} ${Math.floor(data.main.temp)}℃`;
            cityContainer.innerText = data.name;

            // const name = data.name;
            // const weather = data.weather[0].main;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
