function currentTime() {
  var date = new Date()
  var hour = date.getHours()
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()
  hour = updateTime(hour)
  minutes = updateTime(minutes)
  seconds = updateTime(seconds)

  document.getElementById("clock").innerHTML =
    hour + " : " + minutes + " : " + seconds
  var time = setTimeout(function() {
    currentTime()
  }, 1000)
}
function updateTime(s) {
  if (s < 10) {
    return "0" + s
  } else {
    return s
  }
}

currentTime()
