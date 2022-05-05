const searchWrap = document.querySelector('.searchBarBtn')
const searchInputEl = document.querySelector("#search");
const searchBtnEl = document.querySelector("#searchBtn");
const suggestionBox = document.querySelector('#searchHistory')
const mapEl = document.querySelector("#map");

var crimeDetails = {
  total_incidents: 659240,
  total_pages: 6593,
  incidents: [
    {
      city_key: "SMO",
      incident_code: "220038682",
      incident_date: "2022-04-23T00:00:00Z",
      incident_offense: "Assault Offenses",
      incident_offense_code: "13B",
      incident_offense_description: "Simple Assault",
      incident_offense_detail_description:
        "Simple Assault at 300BLK SANTA MONICA PIER",
      incident_offense_crime_against: "Person",
      incident_offense_action: "C",
      incident_source_original_type: "Simple Assault",
      incident_source_name: "SantaMonica_Police_Department",
      incident_latitude: 34.0101238,
      incident_longitude: -118.4964789,
      incident_address: "300BLK SANTA MONICA PIER",
    },
    {
      city_key: "SMO",
      incident_code: "220038792",
      incident_date: "2022-04-23T00:00:00Z",
      incident_offense: "Larceny/Theft Offenses",
      incident_offense_code: "23F",
      incident_offense_description: "Theft From Motor Vehicle",
      incident_offense_detail_description:
        "Theft From Motor Vehicle at 2900BLK 31ST ST",
      incident_offense_crime_against: "Property",
      incident_offense_action: "C",
      incident_source_original_type: "Larceny - From Vehicle",
      incident_source_name: "SantaMonica_Police_Department",
      incident_latitude: 34.0194255,
      incident_longitude: -118.451461,
      incident_address: "2900BLK 31ST ST",
    },
    {
      city_key: "SMO",
      incident_code: "220038685",
      incident_date: "2022-04-23T00:00:00Z",
      incident_offense: "All Other Offenses",
      incident_offense_code: "90Z",
      incident_offense_description: "All Other Offenses",
      incident_offense_detail_description:
        "All Other Offenses at 1900BLK WARWICK AVE ",
      incident_offense_crime_against: "Person, Property, or Society",
      incident_offense_action: "C",
      incident_source_original_type: "Contempt of Court",
      incident_source_name: "SantaMonica_Police_Department",
      incident_latitude: 34.0283855,
      incident_longitude: -118.4574623,
      incident_address: "1900BLK WARWICK AVE ",
    },
    {
      city_key: "SMO",
      incident_code: "220038813",
      incident_date: "2022-04-23T00:00:00Z",
      incident_offense: "Assault Offenses",
      incident_offense_code: "13A",
      incident_offense_description: "Aggravated Assault",
      incident_offense_detail_description:
        "Aggravated Assault at 1500BLK EUCLID ST ",
      incident_offense_crime_against: "Person",
      incident_offense_action: "C",
      incident_source_original_type: "Agg Assault - General",
      incident_source_name: "SantaMonica_Police_Department",
      incident_latitude: 34.0213073,
      incident_longitude: -118.4842948,
      incident_address: "1500BLK EUCLID ST ",
    },
    {
      city_key: "SMO",
      incident_code: "220038587",
      incident_date: "2022-04-23T00:00:00Z",
      incident_offense: "Larceny/Theft Offenses",
      incident_offense_code: "23F",
      incident_offense_description: "Theft From Motor Vehicle",
      incident_offense_detail_description:
        "Theft From Motor Vehicle at 2800BLK EXPOSITION BLVD",
      incident_offense_crime_against: "Property",
      incident_offense_action: "C",
      incident_source_original_type: "Larceny - From Vehicle",
      incident_source_name: "SantaMonica_Police_Department",
      incident_latitude: 34.0283503,
      incident_longitude: -118.4637025,
      incident_address: "2800BLK EXPOSITION BLVD",
    },
    {
      city_key: "SMO",
      incident_code: "220038740",
      incident_date: "2022-04-23T00:00:00Z",
      incident_offense: "Burglary/Breaking & Entering",
      incident_offense_code: "220",
      incident_offense_description: "Burglary/Breaking & Entering",
      incident_offense_detail_description:
        "Burglary/Breaking & Entering at 1300BLK HILL ST ",
      incident_offense_crime_against: "Property",
      incident_offense_action: "C",
      incident_source_original_type: "Burglary - General",
      incident_source_name: "SantaMonica_Police_Department",
      incident_latitude: 34.0084605,
      incident_longitude: -118.4695315,
      incident_address: "1300BLK HILL ST ",
    },
  ],
};

//mapQuest API key: HnpQ1prGRhwRunRNG2qZvQ4BykgnGXIg
L.mapquest.key = "HnpQ1prGRhwRunRNG2qZvQ4BykgnGXIg";
let map = new L.mapquest.map("map", {
  center: [32.715736, -117.161087],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});

//creates different icons and assigns them to a variable
const theftIcon = L.icon({
  iconUrl: "./assets/images/theft.png",
  iconSize: [20, 20],
});
const assaultIcon = L.icon({
  iconUrl: "./assets/images/assault.png",
  iconSize: [20, 20],
});
const burglaryIcon = L.icon({
  iconUrl: "./assets/images/burglary.png",
  iconSize: [20, 20],
});
const drunkIcon = L.icon({
  iconUrl: "./assets/images/drunk.png",
  iconSize: [20, 20],
});
const robberyIcon = L.icon({
  iconUrl: "./assets/images/robbery.png",
  iconSize: [20, 20],
});
const duiIcon = L.icon({
  iconUrl: "./assets/images/dui.png",
  iconSize: [20, 20],
});
const vandalismIcon = L.icon({
  iconUrl: "./assets/images/vandalism.png",
  iconSize: [20, 20],
});
const copIcon = L.icon({
  iconUrl: "./assets/images/cop.png",
  iconSize: [20, 20],
});

function initMap(centerCord, crimeArr) {
  
  map = new L.mapquest.map("map", { //creates a new map centered on the location that the user searched
    center: [centerCord.lat, centerCord.lng],
    layers: L.mapquest.tileLayer("map"),
    zoom: 12,
  });
  
  checkboxchecker() //function that can filter the type of crimes the user wants to view
  
  crimeArr.incidents.forEach(crime => {
    if (crime.incident_offense.match(regex)) {
      let crimeIcon;
      if (/Theft/i.test(crime.incident_offense)) { //If the word "Theft" is in the crime description, the REgExp returns true and adds corresponding icon
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
      L.marker([crime.incident_latitude, crime.incident_longitude], { icon: crimeIcon }).bindTooltip(crime.incident_offense_detail_description).addTo(map);
    } //adds a custom marker, depending on the type of crime, at the location of the crime to the map  
  });
}

//store the city the user searches into local
let searchHistoryArr = JSON.parse(localStorage.getItem("searchHistory")) || [];
searchBtnEl.addEventListener("click", startSearch); //when search icon gets clicked get clicked,
searchInputEl.addEventListener('keyup', checkEnter) //when user presses enter key
//Begins search when user clicks search icon
function startSearch() {
  searchWrap.classList.remove('active'); //hides the search history drop-down
  let inputText = searchInputEl.value.toLowerCase().split(" "); 
  for (let i = 0; i < inputText.length; i++) { //this turns the users entered text into title case
    inputText[i] = inputText[i].charAt(0).toUpperCase() + inputText[i].slice(1);
  }
  let city = inputText.join(" ");
  //OpenWeatherMap API for getting lat and lng key: ce8a9858dadfcfb05f86b5d9eedb659d
  //link to geocoding API with the city value that was chosen above as a parameter
  let locationRequestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city ? city : "San Diego"}&limit=1&appid=ce8a9858dadfcfb05f86b5d9eedb659d`;
  searchInputEl.value = ""; //clears text in text area
  getGeoCord(locationRequestUrl);
}

//take the city that the user searches and obtains the latitude and longitude of that city
function getGeoCord(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if(data.length == 0) {
        return
      }
      else {
        map.remove(); //removes the map (new map gets added in initMap()), we do this to remove all of the markers from the previous search
        let cityName = data[0].name; //gets the first city returned in search from API
        if (searchHistoryArr.indexOf(cityName) < 0 && data.length > 0) {
          //this makes sure there are no repeated citys in search history
          searchHistoryArr.push(cityName);
          localStorage.setItem("searchHistory", JSON.stringify(searchHistoryArr));
        }
        //gets the latitude and longitude of the city returned by API
        let geoCord = {
          lat: data[0].lat,
          lng: data[0].lon,
        };
        initMap(geoCord, crimeDetails);
    }
      //CrimeDataAPICall(geoCord)
    });
}

function CrimeDataAPICall(latlong) {
  // Crime Data API key: gpuXbzy7VI8nN51pmvGzSPPYl1TeGQa16HiOiSn5 We're only limited to 100 calls on this key
  // var lat = "33.1434" //xx.yyyy
  // var lon = "-117.1661"
  // var distance = "5mi" // Xunits unit types: mi yd ft km m
  const datetime_ini = "2020-01-01 00:00:00"; // yyyy-MM-dd'T'HH: mm: ss.SSS'Z or YYYY-MM-DD HH:mm:ss
  let datetime_end = moment().format("MM-DD-YYYY hh:mm:ss");
  radius = 50; //hardcoded for now

  var request = new XMLHttpRequest();

  request.open("GET", "https://api.crimeometer.com/v1/incidents/raw-data?lat=" + latlong.lat +"&lon=" +latlong.lng +"&distance=" +radius +"mi&datetime_ini=" +datetime_ini +"&datetime_end=" + datetime_end +"&page=1"
  ); //Variable values
  // request.open('GET', 'https://api.crimeometer.com/v1/incidents/raw-data?lat=' + lat + '&lon=' + lon +
  // '&distance=' + distance + '&datetime_ini=' + datetime_ini + '&datetime_end=' + datetime_end + '&page=1'); //Hardcoded values for testing
  request.setRequestHeader("Content-Type", "object");
  request.setRequestHeader(
    "x-api-key",
    "gpuXbzy7VI8nN51pmvGzSPPYl1TeGQa16HiOiSn5"
  );

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log("Status:", this.status);
      console.log("Headers:", this.getAllResponseHeaders());
      console.log("Body:", this.responseText);
      console.log(JSON.parse(this.responseText));
      crimedetails = JSON.parse(this.responseText);
      console.log(crimedetails);
      console.log(
        "Crime Address",
        crimedetails.incidents[0].incident_address,
        "Crime",
        crimedetails.incidents[0].incident_offense,
        "Lat:",
        crimedetails.incidents[0].incident_latitude,
        "Long",
        crimedetails.incidents[0].incident_longitude
      );
      initMap(latlong, crimedetails);
    }
  };
  request.send();
}

var regex = ""
function checkboxchecker(){
  regex = ""
  let wordmatch = ""
  if (document.getElementById("destruction").checked){
    console.log("dest checked")
    wordmatch+="destruction|"
  }
  if (document.getElementById("robbery").checked){
    console.log("checked")
    wordmatch+="robbery|"
  }
  if (document.getElementById("dui").checked){
    console.log("checked")
    wordmatch+="dui|"
  }
  if (document.getElementById("drunk").checked){
    console.log("checked")
    wordmatch+="drunk|"
  }
  if (document.getElementById("burglary").checked){
    console.log("checked")
    wordmatch+="burglary|"
  }
  if (document.getElementById("assault").checked){
    console.log("checked")
    wordmatch+="assault|"
  }
  if (document.getElementById("larceny").checked){
    console.log("checked")
    wordmatch+="larceny|"
  }
  wordmatch = wordmatch.substring(0, wordmatch.length - 1)
  regex = new RegExp(wordmatch, 'i')
}

searchInputEl.onkeyup = (e) => {  //every time a key gets released while typing in search bar
  let userData = e.target.value; //value of key that got released
  let emptyArr = [];
  if (userData) {
    emptyArr = searchHistoryArr.filter((data) => { //if the value the user is entering matches a value in our searchHistoryArr, add to empty arr
      return data.toLowerCase().startsWith(userData.toLowerCase());
    });
    emptyArr = emptyArr.map((data) => { //adds each match to a list element 
      return data = `<li>${data}</li>`;
    });
    searchWrap.classList.add('active');  
    showSuggestions(emptyArr);
    let allSugg = suggestionBox.querySelectorAll('li'); //gives each recommendation event listener
    for (let i=0; i<allSugg.length; i++) {
      allSugg[i].setAttribute('onclick', "select(this)");
    }
  }
  else {
    searchWrap.classList.remove('active');
  }
}

function select(element) { //when user clicks on any of the search recommendations
  searchInputEl.value = element.textContent; //autofills the search bar with the name of city that the user clicked on
  searchWrap.classList.remove('active'); //removes search recommendations from screen 
  startSearch();
}

function showSuggestions(list) { //makes the search suggestion drop down appear on UI
  let listData;
  if (!list.length) { //if no matches are found, the value of the search recommendation is equal to what the user is actively typing 
    listData = `<li>${searchInputEl.value}</li>`;
  }
  else { 
    listData = list.join(''); //if a match is found, the recommended city(s) is shown
  }
  suggestionBox.innerHTML = listData; //adds the list to html
}

function checkEnter(e) { //when user is typing in search bar, if they hit the enter key the search will execute 
  if (e.key === "Enter") {
    startSearch()
  }
  else {
    return;
  }
}