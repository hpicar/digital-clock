function getYourTimeBaddies() {
    var date = new Date();
    var A = date.getHours();
    var B = date.getMinutes();
    var E = date.getSeconds();
    function C(minutes) {
if (minutes < 10) {
  return "0" + minutes;
}
else if (minutes >= 10) {
  return minutes;
}
};
function F(seconds) {
if (seconds < 10) {
  return "0" + seconds;
}
else if (seconds >= 10) {
  return seconds;
}    
}
function D(hours) {
    if (hours === 0) {
        return hours = 12 + ":" + C(B) + ":" + F(E) + " AM";
    }
    else if (hours < 10) {
        return "0" + hours + ":" + C(B) + ":" + F(E) + " AM";
    }
    if (hours = 10,11,12) {
      return hours + ":" + C(B) + ":" + F(E) + " AM";
    }
    else if (hours > 12) {
        return "0" + hours + ":" + C(B) + ":" + F(E) + " PM";
    }
    };
    document.getElementById("demo").innerHTML = D(A);
}

setInterval(getYourTimeBaddies, 0);