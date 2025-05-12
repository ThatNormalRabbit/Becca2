var startDate = new Date("Apr 17, 2025 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = now - startDate;

  var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
  var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  var days = Math.floor((distance %  (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  if (months => 1){
    document.getElementById("demo").innerHTML = months + "m " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  } elif (years => 1){
    document.getElementById("demo").innerHTML = years + "y " + months + "m " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  } else {
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }

}, 1000);
