const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f1812a3728mshd8186ffdc9dca0cp1e1fecjsn7aa167559c79',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response);

            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            humidity2.innerHTML = response.humidity
            temp2.innerHTML = response.temp
        })
        .catch(err => console.error(err));
}


//Searching Button Process
submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(city.value);
})

getWeather("Delhi");


//Kolkata
const getKolkata = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response);
            feels_like_kolkata.innerHTML = response.feels_like
            humidity_kolkata.innerHTML = response.humidity
            max_temp_kolkata.innerHTML = response.max_temp
            min_temp_kolkata.innerHTML = response.min_temp
            temp_kolkata.innerHTML = response.temp
            wind_degrees_kolkata.innerHTML = response.wind_degrees
            wind_speed_kolkata.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}

//Mumbai Weather
const getMumbai = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response);

            //Mumbai
            feels_like_mumbai.innerHTML = response.feels_like
            humidity_mumbai.innerHTML = response.humidity
            max_temp_mumbai.innerHTML = response.max_temp
            min_temp_mumbai.innerHTML = response.min_temp
            temp_mumbai.innerHTML = response.temp
            wind_degrees_mumbai.innerHTML = response.wind_degrees
            wind_speed_mumbai.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}

//Rajkot
const getRajkot = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response);

            //Rajkot
            feels_like_rajkot.innerHTML = response.feels_like
            humidity_rajkot.innerHTML = response.humidity
            max_temp_rajkot.innerHTML = response.max_temp
            min_temp_rajkot.innerHTML = response.min_temp
            temp_rajkot.innerHTML = response.temp
            wind_degrees_rajkot.innerHTML = response.wind_degrees
            wind_speed_rajkot.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}

//Ahmedabad
const getAhmedabad = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response);

            //Ahmedabad
            feels_like_ahmedabad.innerHTML = response.feels_like
            humidity_ahmedabad.innerHTML = response.humidity
            max_temp_ahmedabad.innerHTML = response.max_temp
            min_temp_ahmedabad.innerHTML = response.min_temp
            temp_ahmedabad.innerHTML = response.temp
            wind_degrees_ahmedabad.innerHTML = response.wind_degrees
            wind_speed_ahmedabad.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}
getKolkata("Kolkata");
getMumbai("Mumbai");
getRajkot("Rajkot");
getAhmedabad("Ahmedabad");