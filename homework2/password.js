var myInput = document.getElementById("pwd");
var confirmPassword = document.getElementById("rePwd");
var msgBox = document.getElementById("message");

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onfocus = function() {
  msgBox.style.display = "block";
}

myInput.onblur = function() {
  msgBox.style.display = "none";
}

myInput.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function checkMatch() {
  var matchSpan = document.getElementById("matchError");
  if (myInput.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match.");
    matchSpan.textContent = "Passwords do not match.";
  } else {
    confirmPassword.setCustomValidity("");
    matchSpan.textContent = ""; 
  }
}

myInput.addEventListener("change", checkMatch);
confirmPassword.addEventListener("keyup", checkMatch);

function updateSliderDisplay(val) {
  document.getElementById("health_val").textContent = val + " / 10";
}

function getdata1() {
  console.log("Reviewing inputs...");
}

function removedata1() {
  console.log("Form cleared.");

function updateSliderDisplay(val) {
  document.getElementById("health_val").textContent = val + " / 10";
}
}
