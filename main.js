const apiKey = '910fecee9fd5ac1201aa347c5f421d32'
const adress = 'https://api.openweathermap.org/data/2.5/'


const cityName = document.querySelector('.text')
const input = document.querySelector('.input')
const searchBtn = document.querySelector('.search-btn')
const mainDeg = document.querySelector('.degree')
const weatherType = document.querySelector('.text2')
const body = document.querySelector('body')
const minMax = document.querySelector('.minMax')


searchBtn.addEventListener('click', getCityWeather)

function getCityWeather(e) {
    e.preventDefault()

    fetch(`${adress}weather?q=${input.value}&units=metric&appid=${apiKey}`)
        .then(function (weather) {
            return weather.json()
        })
        .then(getResult)


    function getResult(data) {
        showResult(data)
        console.log(data);
    }
}

function showResult(info) {
    cityName.textContent = `${info.name}, ${info.sys.country}`
    mainDeg.textContent = `${Math.round(info.main.temp)}˚c`
    weatherType.textContent = `${info.weather[0].main}`
    body.style.background = `linear-gradient(rgba(0,0,0,0.6) 100%, rgba(0,0,0,0.6) 100%), url(https://source.unsplash.com/1920x1280/?${info.weather[0].main})`
    minMax.textContent = `${Math.round(info.main.temp_min)}˚c/${Math.round(info.main.temp_max)}˚c`
}