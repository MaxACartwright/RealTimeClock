function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  var milli = d.getMilliseconds();
  var year = d.getFullYear();
  var month = d.getMonth();
  var Day = d.getDate();
  var amOrPm = null;
    if (hours => 13){
    hours -= 12
    amOrPm = "PM"
  }
  else{
    amOrPm = "AM"
  }
  document.body.innerHTML = hours+":"+mins+":"+secs+"."+milli+" "+amOrPm+"<br>"+month+"/"+Day+"/"+year;
}
month += 1;
setInterval(printTime, 1);
