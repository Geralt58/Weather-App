let weather = {
   apiKey: '45c4402068d3d2ab7159829dc8046f28',
   async fetchWeather(city) {
      const response = await fetch(
         'https://api.openweathermap.org/data/2.5/weather?q=' +
            city +
            '&units=metric&appid=' +
            this.apiKey
      )
      const data = await response.json()
      this.displayWeather(data)
   },
   displayWeather(data) {
      const { name } = data
      const { icon, description } = data.weather[0]
      const { temp, humidity } = data.main
      const { speed } = data.wind
      // console.log(name, icon, description, temp, humidity, speed)
      document.querySelector('.city').innerText = 'Weather in ' + name
      document.querySelector('.icon').src =
         'http://openweathermap.org/img/wn/' + icon + '.png'
      document.querySelector('.temp').innerText = temp + '°C'
      document.querySelector('.description').innerText = description
      document.querySelector('.humidity').innerText =
         'Humidity: ' + humidity + '%'
      document.querySelector('.wind').innerText =
         'Wind speed: ' + speed + 'Km/h'
      document.querySelector('.weather').classList.remove('loading')
      document.body.style.backgroundImage =
         "url('https://source.unsplash.com/1600x900/?" + description + "')"
   },
   search() {
      this.fetchWeather(document.querySelector('.search-bar').value)
   }
}

document.querySelector('form').addEventListener('submit', (e) => {
   e.preventDefault()
   weather.search()
})

/* document.querySelector('.search button').addEventListener('click', () => {
   weather.search()
})

document.querySelector('.search-bar').addEventListener('keyup', (e) => {
   if (e.key === 'Enter') {
      weather.search()
   }
}) */

weather.fetchWeather('Mumbai')
