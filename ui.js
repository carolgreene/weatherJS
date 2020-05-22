class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.feelsLike = document.getElementById('w-feels-like')
    this.pressure = document.getElementById('w-pressure')
    this.wind = document.getElementById('w-wind')
  }

  //need to adjust this for the new api I'm using to get the correct names
  paint(weather) {
    console.log(weather.wind)
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = (weather.main.temp + ' F');
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}`;
  }
}