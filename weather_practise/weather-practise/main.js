const apiKey = `910fecee9fd5ac1201aa347c5f421d32`
const api = `https://api.openweathermap.org/data/2.5/`

const form = document.querySelector('form')
const input = document.querySelector('input')
const place = document.querySelector('.place')
const mainTemp = document.querySelector('.temp')
const min = document.querySelector('.min')
const max = document.querySelector('.max')
const weatherType = document.querySelector('.weather-type')
const body = document.querySelector('body')

form.addEventListener('submit', showResult)

function showResult(e) {
    e.preventDefault()
    
    fetch(`${api}weather?q=${input.value}&units=metric&appid=${apiKey}`).then(function(data) {
        return data.json()
    }).then(getResult)
    
    function getResult(info) {
        console.log(info);
        nextResult(info)
    }
}

function nextResult(data) {
    place.textContent = `${data.name},${data.sys.country}`
    mainTemp.textContent = `${Math.round(data.main.temp)}˚c`
    weatherType.textContent = data.weather[0].main
    min.textContent = `${Math.round(data.main.temp_min)}˚c/`
    max.textContent = `${Math.round(data.main.temp_max)}˚c`
    body.style.background = `url('https://source.unsplash.com/1920x1280/?${data.weather[0].main}')`
}