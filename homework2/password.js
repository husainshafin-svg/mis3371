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
  var outputArea = document.getElementById("outputformdata");
  outputArea.innerHTML = "";

  var firstName = document.getElementById("firstName").value;
  var middleInitial = document.getElementById("middleInitial").value;
  var lastName = document.getElementById("lastName").value;
  var dob = document.getElementById("dob").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address1 = document.getElementById("address1").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var bloodType = document.getElementById("bloodType").value;
  var healthRating = document.getElementById("health").value;
  var symptoms = document.getElementById("symptoms").value;
  var userId = document.getElementById("uid").value;

  var gender = "";
  if (document.getElementById("genM").checked) gender = "Male";
  if (document.getElementById("genF").checked) gender = "Female";
  if (document.getElementById("genN").checked) gender = "Non-Binary";

  var tobacco = "";
  if (document.getElementById("tobY").checked) tobacco = "Yes";
  if (document.getElementById("tobN").checked) tobacco = "No";

  var allergies = [];
  if (document.getElementById("alg1").checked) allergies.push("Seafood");
  if (document.getElementById("alg2").checked) allergies.push("Peanuts");
  if (document.getElementById("alg3").checked) allergies.push("Sulfa Drugs");
  if (document.getElementById("alg4").checked) allergies.push("Penicillin");
  if (document.getElementById("alg5").checked) allergies.push("Latex");
  
  var allergyString = allergies.length > 0 ? allergies.join(", ") : "None";

  var reviewHTML = "<div style='background: #f9fafb; border: 2px dashed #9ca3af; padding: 20px; border-radius: 6px; margin-top: 20px; font-family: verdana;'>";
  reviewHTML += "<h3 style='color: #1f2937; margin-top: 0;'>Review Form Submissions Data</h3>";
  
  reviewHTML += "<div><b>Name:</b> <span>" + firstName + " " + (middleInitial ? middleInitial + ". " : "") + lastName + "</span></div>";
  reviewHTML += "<div><b>Date of Birth:</b> <span>" + dob + "</span></div>";
  reviewHTML += "<div><b>Email Address:</b> <span>" + email + "</span></div>";
  reviewHTML += "<div><b>Phone Number:</b> <span>" + phone + "</span></div>";
  reviewHTML += "<div><b>Address:</b> <span>" + address1 + ", " + city + ", " + state + "</span></div>";
  reviewHTML += "<div><b>Blood Classification Group:</b> <span>" + (bloodType ? bloodType : "Not Declared") + "</span></div>";
  reviewHTML += "<div><b>Medical Allergies Recorded:</b> <span>" + allergyString + "</span></div>";
  reviewHTML += "<div><b>Gender Identity Choice:</b> <span>" + (gender ? gender : "Unselected") + "</span></div>";
  reviewHTML += "<div><b>Tobacco User Status:</b> <span>" + (tobacco ? tobacco : "Unselected") + "</span></div>";
  reviewHTML += "<div><b>Global Health Status Metrics:</b> <span>" + healthRating + " / 10</span></div>";
  reviewHTML += "<div><b>Current Outlined Symptoms:</b> <span>" + (symptoms ? symptoms : "None Reported") + "</span></div>";
  reviewHTML += "<div><b>Configured Account UserID:</b> <span>" + userId + "</span></div>";
  
  reviewHTML += "</div>";

  outputArea.innerHTML = reviewHTML;
}

function removedata1() {
  document.getElementById("outputformdata").innerHTML = "";
  document.getElementById("health_val").textContent = "5 / 10";
}var myInput = document.getElementById("pwd");
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
  var outputArea = document.getElementById("outputformdata");
  outputArea.innerHTML = "";

  var firstName = document.getElementById("firstName").value;
  var middleInitial = document.getElementById("middleInitial").value;
  var lastName = document.getElementById("lastName").value;
  var dob = document.getElementById("dob").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address1 = document.getElementById("address1").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var bloodType = document.getElementById("bloodType").value;
  var healthRating = document.getElementById("health").value;
  var symptoms = document.getElementById("symptoms").value;
  var userId = document.getElementById("uid").value;

  var gender = "";
  if (document.getElementById("genM").checked) gender = "Male";
  if (document.getElementById("genF").checked) gender = "Female";
  if (document.getElementById("genN").checked) gender = "Non-Binary";

  var tobacco = "";
  if (document.getElementById("tobY").checked) tobacco = "Yes";
  if (document.getElementById("tobN").checked) tobacco = "No";

  var allergies = [];
  if (document.getElementById("alg1").checked) allergies.push("Seafood");
  if (document.getElementById("alg2").checked) allergies.push("Peanuts");
  if (document.getElementById("alg3").checked) allergies.push("Sulfa Drugs");
  if (document.getElementById("alg4").checked) allergies.push("Penicillin");
  if (document.getElementById("alg5").checked) allergies.push("Latex");
  
  var allergyString = allergies.length > 0 ? allergies.join(", ") : "None";

  var reviewHTML = "<div style='background: #f9fafb; border: 2px dashed #9ca3af; padding: 20px; border-radius: 6px; margin-top: 20px; font-family: verdana;'>";
  reviewHTML += "<h3 style='color: #1f2937; margin-top: 0;'>Review Form Submissions Data</h3>";
  
  reviewHTML += "<div><b>Name:</b> <span>" + firstName + " " + (middleInitial ? middleInitial + ". " : "") + lastName + "</span></div>";
  reviewHTML += "<div><b>Date of Birth:</b> <span>" + dob + "</span></div>";
  reviewHTML += "<div><b>Email Address:</b> <span>" + email + "</span></div>";
  reviewHTML += "<div><b>Phone Number:</b> <span>" + phone + "</span></div>";
  reviewHTML += "<div><b>Address:</b> <span>" + address1 + ", " + city + ", " + state + "</span></div>";
  reviewHTML += "<div><b>Blood Classification Group:</b> <span>" + (bloodType ? bloodType : "Not Declared") + "</span></div>";
  reviewHTML += "<div><b>Medical Allergies Recorded:</b> <span>" + allergyString + "</span></div>";
  reviewHTML += "<div><b>Gender Identity Choice:</b> <span>" + (gender ? gender : "Unselected") + "</span></div>";
  reviewHTML += "<div><b>Tobacco User Status:</b> <span>" + (tobacco ? tobacco : "Unselected") + "</span></div>";
  reviewHTML += "<div><b>Global Health Status Metrics:</b> <span>" + healthRating + " / 10</span></div>";
  reviewHTML += "<div><b>Current Outlined Symptoms:</b> <span>" + (symptoms ? symptoms : "None Reported") + "</span></div>";
  reviewHTML += "<div><b>Configured Account UserID:</b> <span>" + userId + "</span></div>";
  
  reviewHTML += "</div>";

  outputArea.innerHTML = reviewHTML;
}

function removedata1() {
  document.getElementById("outputformdata").innerHTML = "";
  document.getElementById("health_val").textContent = "5 / 10";
}
