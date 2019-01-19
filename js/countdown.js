$(document).ready(function () {
  var countDownDate = new Date("Sep 28, 2019 12:00:00").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60* 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#day").html(days);
    $("#hour").html(hours);
    $("#minute").html(minutes);
    $("#second").html(seconds);

  }, 1000);
});
