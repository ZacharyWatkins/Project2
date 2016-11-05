var guess1
var guess2
var guess3
var correct
function submit1(){
  guess1 = document.getElementById("choice").value;
  if (isNaN(guess1)) {
    window.alert("Must be a Number");
  }
  else if (guess1 == 654325){
    guess1 = Number(guess1);
    guess1 = guess1 - 654324;
    window.alert("Your right! Move to the next page.");
  }
  else {
    guess1 = Number(guess1);
    guess1 = guess1 - guess1;
    window.alert("Move to the next page");
  }
  setCookie("entered1",guess1);
}
function submit2(){
  guess2 = document.getElementById("choice").value;
  if (isNaN(guess2)) {
    window.alert("Must be a Number");
  }
  else if (guess2 == 3579){
    guess2 = Number(guess2);
    guess2 = guess2 - 3578;
    window.alert("Your right! Move to the next page.");
  }
  else {
    guess2 = Number(guess2);
    guess2 = guess2 - guess2;
    window.alert("Move to the next page");
  }
  setCookie("entered2",guess2);
}
function submit3(){
  guess3 = document.getElementById("choice").value;
  if (isNaN(guess3)) {
    window.alert("Must be a Number");
  }
  else if (guess3 == 72){
    guess3 = Number(guess3);
    guess3 = guess3 - 71;
    window.alert("Your right! Move to the next page.");
  }
  else {
    guess3 = Number(guess3);
    guess3 = guess3 - guess3;
    window.alert("Move to the next page");
  }
    setCookie("entered3",guess3);
}
function results(){
  var first = getCookie("entered1");
  var second = getCookie("entered2");
  var third = getCookie("entered3");
  var percent;
  percent = Number(first) + Number(second) + Number(third);
  percent = percent / 3;
  percent = percent * 100;
  document.getElementById("percent").innerHTML=percent;
  console.log(percent);
  console.log(first);
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
