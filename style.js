var tester
var correct
function submit1(){
  tester = document.getElementById("choice").value;
  if (isNaN(tester)) {
    window.alert("Must be a Number");
  }
  else if (tester == 23){
    tester = Number(tester);
    tester = tester - 22;
    window.alert("Your right! Move to the next page.");
  }
  else {
    tester = Number(tester);
    tester = tester - tester;
    window.alert("Move to the next page");
  }
  correct = tester;
  console.log(correct);
  setCookie("idea",correct);
}
function submit2(){
  tester = document.getElementById("choice").value;
  if (isNaN(tester)) {
    window.alert("Must be a Number");
  }
  else if (tester == 32){
    tester = Number(tester);
    tester = tester - 31;
    window.alert("Your right! Move to the next page.");
  }
  else {
    tester = Number(tester);
    tester = tester - tester;
    window.alert("Move to the next page");
  }
  correct = tester;
  console.log(correct);
  setCookie("idea",correct);
}
function submit3(){
  tester = document.getElementById("choice").value;
  if (isNaN(tester)) {
    window.alert("Must be a Number");
  }
  else if (tester == 2){
    tester = Number(tester);
    tester = tester - 1;
    window.alert("Your right! Move to the next page.");
  }
  else {
    tester = Number(tester);
    tester = tester - tester;
    window.alert("Move to the next page");
  }
  correct = tester;
  console.log(correct);
  setCookie("idea",correct);
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
