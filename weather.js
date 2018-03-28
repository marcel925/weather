


function getLocation() {
    if (navigator.geolocation) {      navigator.geolocation.getCurrentPosition(showPosition);
    } 
  }

function showPosition(position) {
     
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  
  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" +long, function(data) {  
  
  document.getElementById("localWeather").innerHTML = data.main.temp + " °C";
    
    var img = document.createElement("img");
    img.src = data.weather[0].icon;

var src = document.getElementById("weatherSymbol");
src.appendChild(img);
    
  document.getElementById("button1").innerHTML = data.name + ", " + data.sys.country;

  document.getElementById("button2").innerHTML = data.weather[0].description;

  document.getElementById("button3").innerHTML = "Wind Speed = " + data.wind.speed;
    
  document.getElementById("button4").onclick = function() {toggleCF()};
    
    
    function toggleCF() {
    
    if (document.getElementById("localWeather").innerHTML === data.main.temp + " °C") {
      
      document.getElementById("localWeather").innerHTML = (data.main.temp * 1.80 + 32).toFixed(2) + " °F" ;
          }
      
        else {
        document.getElementById("localWeather").innerHTML = data.main.temp + " °C";
      }    
    }    
});
}

getLocation();
