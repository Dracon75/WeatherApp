const cityInput = document.querySelector("#cityInput");
const form = document.getElementById('search-form');
const log = document.getElementById('log');

let cityName = localStorage.getItem("cityName");


let cities = [];

//moment call
let todayHeader = moment().format("MMM Do, YYYY");
$("#currentDay").text(todayHeader);

//listen for when submit button is clicked
form.addEventListener('submit', logSubmit);

function logSubmit(event) {
  log.textContent = `Form Submitted!`;
  event.preventDefault();
  let userCity = cityInput.value;
  localStorage.setItem("cityName", userCity);
  getApi(userCity);
}


//function that retrieves data from third-party api for a specific location
function getApi(userCity) {
  console.log(userCity);
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + userCity + "&units=imperial&appid=23862a5f23b4f0870e633a28562d8b34";
  const newUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCity + "&units=imperial&appid=aff59ea29b8f5ce7a7a25884ed69fba9";
  fetch(url, {
    method: "GET",
    withCredentials: true
  })
    .then(response => response.json())
    .then(function (data) {
      console.log(data);

      const nameVal = data['name'];
      const tempVal = data['main']['temp'];
      const humVal = data['main']['humidity'];
      const windVal = data['wind']['speed'];
      const uvVal = data['coord']['lat']
      const uviVal = data['coord']['lon']
      //let celcius = Math.round(parseFloat(name.main.temp)-273.15);
      //const fahrenheit = Math.round(((parseFloat(name.main.temp)-273.15)*1.8)+32);
      document.getElementById("name").innerHTML = "name: " + nameVal;
      console.log("nameVal");
      document.getElementById("temp").innerHTML = "Tempature: " + tempVal;
      document.getElementById("humidity").innerHTML = "Humidity: " + humVal;
      document.getElementById("wind-speed").innerHTML = "Wind Speed: " + windVal;
      document.getElementById("uv-index").innerHTML = "UV Index: " + uvVal + " " + uviVal;

      console.log(nameVal, tempVal, humVal, windVal, uvVal, uviVal);
      if (windVal > 5) {
        document.getElementById('main').className = "fas fa-wind";
        document.getElementById('main').innerHTML = "feels windy";
      }
      else {
        document.getElementById('main').className = "fas fa-sun";
        document.getElementById('main').innerHTML = "feels nice";
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  fetch(newUrl, {
    method: "GET",
    withCredentials: true
  })
    .then(response => response.json())
    .then(function (data) {

      //const dayArray = data['list'];
      //console.log("dayArray");

      //for (let index = 0; index < dayArray[5]; index++) {

        console.log("newUrl", data);
      //}
        const arrayVals = data['list']
        const nameVals = data['name'];
        const tempVals = data['main']['temp'];
        const humVals = data['main']['humidity'];
        const windVals = data['wind']['speed'];
        const uvVals = data['coord']['lat']
        const uviVals = data['coord']['lon']

        for (var i = 0; i < 5; i++) {
          console.log(data[i].list);
        }
        
        document.getElementById("name").innerHTML = "name: " + nameVals;
        console.log("newUrl");
        console.log(arrayVals);
        document.getElementById("temp").innerHTML = "Tempature: " + tempVals;
        document.getElementById("humidity").innerHTML = "Humidity: " + humVals;
        document.getElementById("wind-speed").innerHTML = "Wind Speed: " + windVals;
        document.getElementById("uv-index").innerHTML = "UV Index: " + uvVals + " " + uviVals;

        console.log(arrayVals, nameVals, tempVals, humVals, windVals, uvVals, uviVals);
        if (windVal > 5) {
          document.getElementById('main').className = "fas fa-wind";
          document.getElementById('main').innerHTML = "feels windy";
        }
        else {
          document.getElementById('main').className = "fas fa-sun";
          document.getElementById('main').innerHTML = "feels nice";
        }
        ////////////////////////////////////////////////////////////////////////////////////
        document.getElementById("newNameDay2").innerHTML = "name: " + nameVals;
        console.log("nameVal");
        document.getElementById("newTempDay2").innerHTML = "Tempature: " + tempVals;
        document.getElementById("newHumidityDay2").innerHTML = "Humidity: " + humVals;
        document.getElementById("newWind-speedDay2").innerHTML = "Wind Speed: " + windVals;
        document.getElementById("newUv-indexDay2").innerHTML = "UV Index: " + uvVals + " " + uviVals;
        console.log(nameVals, tempVals, humVals, windVals, uvVals, uviVals);
        if (windVal > 5) {
          document.getElementById('newMainDay2').className = "fas fa-wind";
          document.getElementById('newMainDay2').innerHTML = "feels windy";
        }
        else {
          document.getElementById('newMainDay2').className = "fas fa-sun";
          document.getElementById('newMainDay2').innerHTML = "feels nice";
        }
        ///////////////////////////////////////////////////////////////////////////////////
        document.getElementById("newNameDay3").innerHTML = "name: " + nameVals;
        console.log("nameVal");
        document.getElementById("newTempDay3").innerHTML = "Tempature: " + tempVals;
        document.getElementById("newHumidityDay3").innerHTML = "Humidity: " + humVals;
        document.getElementById("newWind-speedDay3").innerHTML = "Wind Speed: " + windVals;
        document.getElementById("newUv-indexDay3").innerHTML = "UV Index: " + uvVals + " " + uviVals;

        console.log(nameVals, tempVals, humVals, windVals, uvVals, uviVals);
        if (windVal > 5) {
          document.getElementById('newMainDay3').className = "fas fa-wind";
          document.getElementById('newMainDay3').innerHTML = "feels windy";
        }
        else {
          document.getElementById('newMainDay3').className = "fas fa-sun";
          document.getElementById('newMainDay3').innerHTML = "feels nice";
        }
        ////////////////////////////////////////////////////////////////////////////////////////
        document.getElementById("newNameDay4").innerHTML = "name: " + nameVals;
        console.log("nameVal");
        document.getElementById("newTempDay4").innerHTML = "Tempature: " + tempVals;
        document.getElementById("newHumidityDay4").innerHTML = "Humidity: " + humVals;
        document.getElementById("newWind-speedDay4").innerHTML = "Wind Speed: " + windVals;
        document.getElementById("newUv-indexDay4").innerHTML = "UV Index: " + uvVals + " " + uviVals;

        console.log(nameVals, tempVals, humVals, windVals, uvVals, uviVals);
        if (windVals > 5) {
          document.getElementById('newMainDay4').className = "fas fa-wind";
          document.getElementById('newMainDay4').innerHTML = "feels windy";
        }
        else {
          document.getElementById('newMainDay4').className = "fas fa-sun";
          document.getElementById('newMainDay4').innerHTML = "feels nice";
        }
        /////////////////////////////////////////////////////////////////////////////////////////////
        document.getElementById("newNameDay5").innerHTML = "name: " + nameVals;
        console.log("nameVal");
        document.getElementById("newTempDay5").innerHTML = "Tempature: " + tempVals;
        document.getElementById("newHumidityDay5").innerHTML = "Humidity: " + humVals;
        document.getElementById("newWind-speedDay5").innerHTML = "Wind Speed: " + windVals;
        document.getElementById("newUv-indexDay5").innerHTML = "UV Index: " + uvVals + " " + uviVals;

        console.log(nameVals, tempVals, humVals, windVals, uvVals, uviVals);
        if (windVals > 5) {
          document.getElementById('newMainDay5').className = "fas fa-wind";
          document.getElementById('newMainDay5').innerHTML = "feels windy";
        }
        else {
          document.getElementById('newMainDay5').className = "fas fa-sun";
          document.getElementById('newMainDay5').innerHTML = "feels nice";
        }
      
    })
    .catch(function (error) {
      console.log(error);
    });

}










