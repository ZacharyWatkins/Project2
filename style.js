var guess1
var guess2
var guess3
var correct
function submit1(){
  guess1 = document.getElementById("choice").value;
  if (isNaN(guess1)) {
    window.alert("Must be a Number");
  }
  else if (guess1 == 23){
    guess1 = Number(guess1);
    guess1 = guess1 - 22;
    window.alert("Your right! Move to the next page.");
  }
  else {
    guess1 = Number(guess1);
    guess1 = guess1 - guess1;
    window.alert("Move to the next page");
  }
  correct = guess1;
  console.log(correct);
  setCookie("idea",correct);
}
function submit2(){
  guess2 = document.getElementById("choice").value;
  if (isNaN(guess2)) {
    window.alert("Must be a Number");
  }
  else if (guess1 == 23){
    guess2 = Number(guess2);
    guess2 = guess2 - 22;
    window.alert("Your right! Move to the next page.");
  }
  else {
    guess2 = Number(guess2);
    guess2 = guess2 - guess2;
    window.alert("Move to the next page");
  }
  correct = getCookie(idea) + guess2;
  console.log(correct);
  setCookie("idea",correct);
}
function submit3(){
  guess3 = document.getElementById("choice").value;
  if (isNaN(guess3)) {
    window.alert("Must be a Number");
  }
  else if (guess3 == 23){
    guess3 = Number(guess1);
    guess3 = guess3 - 22;
    window.alert("Your right! Move to the next page.");
  }
  else {
    guess3 = Number(guess3);
    guess3 = guess1 - guess3;
    window.alert("Move to the next page");
  }
  correct = getCookie(idea) + guess3;
  console.log(correct);
  setCookie("idea",correct);
}
function results(){
  document.getElementById("subtotal").innerHTML=getCookie(idea);
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
