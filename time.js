var startDate = new Date("Apr 17, 2025 00:00:00").getTime();

var x = setInterval(function() {
var now = new Date().getTime();
var distance = now - startDate;

var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
var days = Math.floor((distance %  (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("demo").innerHTML = months + " mes " + days + " dias " + hours + " horas " + minutes + " minutos " + seconds + " segundos ";

}, 1000);
