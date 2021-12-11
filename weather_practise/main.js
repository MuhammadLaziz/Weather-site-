const apiKey = '910fecee9fd5ac1201aa347c5f421d32'
const api = 'https://api.openweathermap.org/data/2.5/'

const btn = document.querySelector('button')
const input = document.querySelector('input')
const place = document.querySelector('.place')
const celcius = document.querySelector('.deg')
const weatherType = document.querySelector('.weather-type')
const min = document.querySelector('.min')
const max = document.querySelector('.max')


btn.addEventListener('click', btnClick)


function btnClick(e) {
    e.preventDefault()
    console.log(input.value);

    fetch(`${api}weather?q=${input.value}&units=metric&appid=${apiKey}`).then(function(weather) {
        return weather.json()
    }).then(getresult)
    
    function getresult(info) {
        showResult(info)
    }
}

function showResult (data) {
    console.log(data);
    place.textContent = `${data.name}, ${data.sys.country}`
    celcius.textContent = `${Math.round(data.main.temp)}˚c`
    weatherType.textContent = data.weather[0].main
    min.textContent = data.main.temp_min
    max.textContent = data.main.temp_max
}

