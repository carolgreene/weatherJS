class Weather {
  constructor(city, state) {
    this.apiKey = 'c163266aa23691a29fdc499f18a534f6';
    this.city = city;
    this.state = state;
  }

  //fetch weather from api
  async getWeather() {
    const response = await fetch
    (`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

    
    const responseData = await response.json();

    return responseData.current_observation;
  }

  //Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}