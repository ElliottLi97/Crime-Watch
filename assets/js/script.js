const searchInputEl = document.querySelector('#search');
const searchBtnEl = document.querySelector('#searchBtn');
const mapEl = document.querySelector('#map');

//mapQuest API key: HnpQ1prGRhwRunRNG2qZvQ4BykgnGXIg
L.mapquest.key = 'HnpQ1prGRhwRunRNG2qZvQ4BykgnGXIg'
let map = new L.mapquest.map('map', {
    center: [32.715736, -117.161087],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
});

  //need to creat different icon objects for each possible crime
const theftIcon = L.icon({
  iconUrl: './assets/images/theft.png',
  iconSize: [8, 15]
});
const assaultIcon = L.icon({
  iconUrl: './assets/images/assault.png',
  iconSize: [8, 15]
});
const burglaryIcon = L.icon({
  iconUrl: './assets/images/burglary.png',
  iconSize: [8, 15]
});
const drunkIcon = L.icon({
  iconUrl: './assets/images/drunk.png',
  iconSize: [8, 15]
});
const robberyIcon = L.icon({
  iconUrl: './assets/images/robbery.png',
  iconSize: [8, 15]
});
const duiIcon = L.icon({
  iconUrl: './assets/images/dui.png',
  iconSize: [8, 15]
});
const vandalismIcon = L.icon({
  iconUrl: './assets/images/vandalism.png',
  iconSize: [8, 15]
});
const copIcon = L.icon({
  iconUrl: './assets/images/cop.png',
  iconSize: [8, 15]
});

L.marker([32.715736, -117.161087], {icon: copIcon}).addTo(map);
L.marker([32.8, -117.2], {icon: duiIcon}).addTo(map);
L.marker([32.6, -117.1], {icon: vandalismIcon}).addTo(map);
L.marker([32.9, -117], {icon: drunkIcon}).addTo(map);

function initMap(centerCord, crimeArr){
    map.panTo(centerCord)
    crimeArr.forEach(crime => {
      let crimeIcon;
      if (/Theft/i.test(crime.incident_offense)){ //probably do RegExp for the matching
        crimeIcon = theftIcon;
      }
      else if (/Assault/i.test(crime.incident_offense)) {
        crimeIcon = assaultIcon;
      }
      else if (/Burglary/i.test(crime.incident_offense)) {
        crimeIcon = burglaryIcon;
      }
      else if (/Drunkenness/i.test(crime.incident_offense)) {
        crimeIcon = drunkIcon;
      }
      else if (/Robbery/i.test(crime.incident_offense)) {
        crimeIcon = robberyIcon;
      }
      else if (/Driving/i.test(crime.incident_offense)) {
        crimeIcon = duiIcon;
      }
      else if (/Vandalism/i.test(crime.incident_offense)) {
        crimeIcon = vandalismIcon;
      }
      else {
        crimeIcon = copIcon;
      }
      //chain else if statements for all possible crimes
      L.marker([crime.incident_latitude, crime.incident_longitude], {icon: crimeIcon}).addTo(map);
  });
}

//store the city the user searches into local
let searchHistoryArr = JSON.parse(localStorage.getItem('searchHistory')) || []; 
searchBtnEl.addEventListener('click', startSearch) //when blue search button get clicked, 

//Begins are search when user clicks any button in the searchWrap element
function startSearch() {
  let inputText = searchInputEl.value.toLowerCase().split(' '); //this turns the users entered text into title case 
  for (let i=0; i<inputText.length;i++){
      inputText[i] = inputText[i].charAt(0).toUpperCase() + inputText[i].slice(1);
  }
  let city = inputText.join(' ');
  //OpenWeatherMap API for getting lat and lng key: ce8a9858dadfcfb05f86b5d9eedb659d 
  //link to geocoding API with the city value that was chosen above as a parameter 
  let locationRequestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city ? city : 'San Diego'}&limit=1&appid=ce8a9858dadfcfb05f86b5d9eedb659d`
  searchInputEl.value = ''; //clears text in text area 
  getGeoCord(locationRequestUrl);
}

//take the most current city that the user searches and obtain the lat and long of city
function getGeoCord(requestUrl) {
    fetch(requestUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        
        let cityName = data[0].name; //gets the first city returned in search from API
        if (searchHistoryArr.indexOf(cityName) < 0 && data.length > 0) { //this makes sure there are no repeated citys in search history 
            searchHistoryArr.push(cityName);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistoryArr));
        }
        //gets the latitude and longitude of the city returned by API
        let geoCord = {
            lat : data[0].lat,
            lng : data[0].lon
        }
        initMap(geoCord);
        //need to send the lat and lon cord to crimeometer API
    })
}



// Crime Data API key: gpuXbzy7VI8nN51pmvGzSPPYl1TeGQa16HiOiSn5 We're only limited to 100 calls on this key
var lat = "33.1434" //xx.yyyy
var lon = "-117.1661"
var distance = "5mi" // Xunits unit types: mi yd ft km m 
var datetime_ini = "2022-01-01 00:00:00" // yyyy-MM-dd'T'HH: mm: ss.SSS'Z or YYYY-MM-DD HH:mm:ss
var datetime_end = "2022-04-25 00:00:00"

var request = new XMLHttpRequest();

request.open('GET', 'https://api.crimeometer.com/v1/incidents/raw-data?lat='+lat+'&lon='+lon+'&distance='+distance+'&datetime_ini='+datetime_ini+'&datetime_end='+datetime_end+'&page=1');

request.setRequestHeader('Content-Type', 'object');
request.setRequestHeader('x-api-key', 'gpuXbzy7VI8nN51pmvGzSPPYl1TeGQa16HiOiSn5');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
    console.log(JSON.parse(this.responseText))
  }
};

//request.send(); 