let wind = document.querySelector("#rain-speed")
let city = document.querySelector("#city")
let temp = document.querySelector("#temp") 
let humidity = document.querySelector('#humidity-value')
let api_key = ""
navigator.geolocation.getCurrentPosition(position => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${api_key}&units=metric`
    fetch(url)
    .then(
        response => response.json()
    .then(
        responseText => {
            console.log(responseText)
            city.textContent = responseText["name"]
            temp.textContent = Math.floor(responseText["main"]["temp"])
            wind.textContent = responseText["wind"]["speed"]
            humidity.textContent = responseText["main"]["humidity"]
       }))
})
