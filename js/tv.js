function setVideo(city) {
  //document.getElementById("demo").innerHTML = city.responseText;
  var pl;
  var response = city.trim();

  switch (response) {
    case "Toronto":
      pl = "PLAs1zSLtTHBTfvtHP89HpjoqoXNH9IZkF";
      break;
    case "British Colombia":
      pl = "PLAs1zSLtTHBQsuq2EpU4QyDkmO9d4u_Wd";
      break;
    default:
      pl = "PLAs1zSLtTHBQ0ayczij2W67zVyNpNrdGd";
  }

  var source = "https://www.youtube.com/embed/videoseries?list=" + pl;
  document.getElementById("newsVideo").src = source;
  document.getElementById("videoDesc").innerHTML = "COVID-19 News in "+ city;
}

function getCity(ip) {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      setVideo(this.responseText);
    }
  }
  xhttp.open("GET", "https://ipinfo.io/" + ip.responseText + "/city", true);
  xhttp.send();
}

function getIP() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getCity(this);
    }
  }
  xhttp.open("GET", "https://api.ipify.org", true);
  xhttp.send();
}
getIP();
