var city, region, location;

function setVideo() {
  //document.getElementById("demo").innerHTML = city.responseText;
  var pl, location;
  region = region.trim();

  switch (region) {
    case "Ontario":
      pl = "PLAs1zSLtTHBTfvtHP89HpjoqoXNH9IZkF";
      location = "Toronto";
      break;
    case "British Colombia":
      pl = "PLAs1zSLtTHBQsuq2EpU4QyDkmO9d4u_Wd";
      location = region;
      break;
    case "Alberta":
      pl = "PLAs1zSLtTHBSDIqMHbLmWZFJbh66ayMNi";
      location = region;
      break;
    case "Quebec":
      pl = "PLAs1zSLtTHBTKWCByQIi8VhnNLDuFWtNf";
      location = region;
      break;
    default:
      pl = "PLAs1zSLtTHBQ0ayczij2W67zVyNpNrdGd";
      location = "Canada";
  }

  var source = "https://www.youtube.com/embed/videoseries?list=" + pl;
  document.getElementById("newsVideo").src = source;
  document.getElementById("videoDesc").innerHTML = "COVID-19 News in "+ location;
}

function getCity(ip) {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      city = this.responseText;
      setVideo();
    }
  }
  xhttp.open("GET", "https://ipinfo.io/" + ip.responseText + "/city", true);
  xhttp.send();
}

function getRegion(ip) {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       region = this.responseText;
       getCity(ip);
    }
  }
  xhttp.open("GET", "https://ipinfo.io/" + ip.responseText + "/region", true);
  xhttp.send();
}

function getIP() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getRegion(this);
    }
  }
  xhttp.open("GET", "https://api.ipify.org", true);
  xhttp.send();
}
getIP();
