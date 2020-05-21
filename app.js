//Init weather object
const weather = new Weather('chicago','US');

//Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

function getWeather(){
  weather.getWeather() //will return a promise bc getWeather() is an async function
    .then(results => {
      console.log('results:', results)
    })
    .catch(err => console.log("something went wrong", err))
  }