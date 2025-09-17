var startDate = new Date("Apr 17, 2025 00:00:00");

setInterval(function () {
  var now = new Date();

  var years = now.getFullYear() - startDate.getFullYear();
  var months = now.getMonth() - startDate.getMonth();
  var days = now.getDate() - startDate.getDate();
  var hours = now.getHours() - startDate.getHours();
  var minutes = now.getMinutes() - startDate.getMinutes();
  var seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    var prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  document.getElementById("demo").innerHTML =
    (years > 0 ? years + " anos " : "") +
    months + " meses " +
    days + " dias " +
    hours + " horas " +
    minutes + " minutos " +
    seconds + " segundos ";
}, 1000);
