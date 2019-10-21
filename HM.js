function currentTime() {
  var date = new Date()
  var hour = date.getHours()
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()
  hour = updateTime(hour)
  minutes = updateTime(minutes)
  seconds = updateTime(seconds)

  document.getElementById("clock").innerHTML = "#" + hour + minutes + seconds
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

setInterval(function() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16)
  document.body.style.backgroundColor = "#" + randomColor
}, 2000)

// function changecolor() {
//   return "#" + Math.floor((Math.random() * 1677215) << 0).toString(16)
// }
// var color = function() {
//   document.getElementById("color")
//   document.body.style.backgroundColor = changecolor()
// }
// setInterval(changeColor, 2000)
