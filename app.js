//Init storage
const storage = new Storage()
//get stored location data
const weatherLocation = storage.getLocationData()

//init weather & ui
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI()


//Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  const country = document.getElementById('country').value
  //change location
  weather.changeLocation(city, country)
  //set location in local storage
  storage.setLocationData(city, country)
  //get and display weather
  getWeather();

  //close modal *need to use jquery bc bootstrap uses it for this
  $('#locModal').modal('hide');
})

function getWeather(){
  weather.getWeather() //will return a promise bc getWeather() is an async function
    .then(results => {
      console.log(results)
      ui.paint(results)
    })
    .catch(err => console.log("something went wrong", err))
  }