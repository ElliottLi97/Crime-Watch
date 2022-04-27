function initMap() {
    var options = {
        zoom: 8,
        center: {lat:32.715736, lng: -117.161087}
    }
    var map = new google.maps.Map(document.querySelector('#map'), options)
}


// Crime Data API key: gpuXbzy7VI8nN51pmvGzSPPYl1TeGQa16HiOiSn5 We're only limited to 100 calls on this key
var lat = "33.1434" //xx.yyyy
var lon = "-117.1661"
var distance = "5mi" // Xunits unit types: mi yd ft km m 
var datetime_ini = "2022-01-01 00:00:00" // yyyy-MM-dd'T'HH: mm: ss.SSS'Z or YYYY-MM-DD HH:mm:ss
var datetime_end = "2022-04-25 00:00:00"

var request = new XMLHttpRequest();

request.open('GET', 'https://api.crimeometer.com/v1/incidents/raw-data?lat='+lat+'&lon='+lon+'&distance='+distance+'&datetime_ini='+datetime_ini+'&datetime_end='+datetime_end+'&page=1');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('x-api-key', 'gpuXbzy7VI8nN51pmvGzSPPYl1TeGQa16HiOiSn5');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

//request.send(); 