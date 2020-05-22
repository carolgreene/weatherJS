class Weather {
  constructor(city, country) {
    this.apiKey = 'c163266aa23691a29fdc499f18a534f6'
    this.city = city;
    //this.state = 'NY';
    this.country = country;
  }

  //fetch weather from api
  async getWeather() {
    const response = await fetch
    (`https://api.openweathermap.org/data/2.5/weather?q=${this.city},$
    {this.country}&APPID=${this.apiKey}&units=imperial`);

    
    const responseData = await response.json();

    return responseData;
  }

  //Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}