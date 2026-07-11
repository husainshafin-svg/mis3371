function setCookie(cname, cvalue, exhours) {
    const d = new Date();
    d.setTime(d.getTime() + (exhours * 60 * 60 * 1000)); 
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const nonSecureFields = ['firstName', 'middleInitial', 'lastName', 'email', 'phone', 'dob', 'address1', 'city', 'bloodType', 'health', 'symptoms', 'uid'];

function saveToLocalStorage() {
    if(document.getElementById('rememberMe').checked) {
        nonSecureFields.forEach(id => {
            let el = document.getElementById(id);
            if(el) localStorage.setItem(id, el.value);
        });
    }
}

function loadFromLocalStorage() {
    nonSecureFields.forEach(id => {
        let storedVal = localStorage.getItem(id);
        if(storedVal !== null) {
            let el = document.getElementById(id);
            if(el) el.value = storedVal;
        }
    });
    let healthVal = localStorage.getItem('health');
    if(healthVal) updateSliderDisplay(healthVal);
}

function clearLocalStorage() {
    nonSecureFields.forEach(id => {
        localStorage.removeItem(id);
    });
}

window.onload = function() {
    let user = getCookie("firstName");
    if (user != "") {
        document.getElementById("greetingMessage").textContent = "Welcome back, " + user;
        document.getElementById("cookieNameDisplay").textContent = user;
        document.getElementById("resetContainer").style.display = "block";
        loadFromLocalStorage();
    } else {
        document.getElementById("greetingMessage").textContent = "Welcome New user";
    }
};

document.getElementById('notYouCheck').addEventListener('change', function() {
    if(this.checked) {
        deleteCookie("firstName");
        clearLocalStorage();
        
        document.querySelectorAll('input[type="text"], input[type="date"], input[type="number"], select, textarea').forEach(el => el.value = '');
        document.getElementById("health").value = 5;
        updateSliderDisplay(5);
        document.getElementById("rememberMe").checked = true;

        document.getElementById("greetingMessage").textContent = "Welcome New user";
        document.getElementById("resetContainer").style.display = "none";
        this.checked = false; 
    }
});

document.querySelector('.form-container').addEventListener('change', function(e) {
    if(e.target.id === 'rememberMe') {
        if(!e.target.checked) {
            deleteCookie('firstName');
            clearLocalStorage();
        } else {
            let fName = document.getElementById('firstName').value;
            if(fName) setCookie('firstName', fName, 48);
            saveToLocalStorage();
        }
    } else {
        saveToLocalStorage();
        if(e.target.id === 'firstName' && document.getElementById('rememberMe').checked) {
            setCookie('firstName', e.target.value, 48);
        }
    }
});

var myInput = document.getElementById("pwd");
var confirmPassword = document.getElementById("rePwd");
var msgBox = document.getElementById("message");

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

if(myInput) {
    myInput.onfocus = function() { msgBox.style.display = "block"; }
    myInput.onblur = function() { msgBox.style.display = "none"; }
    myInput.onkeyup = function() {
      var lowerCaseLetters = /[a-z]/g;
      if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid"); letter.classList.add("valid");
      } else {
        letter.classList.remove("valid"); letter.classList.add("invalid");
      }

      var upperCaseLetters = /[A-Z]/g;
      if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid"); capital.classList.add("valid");
      } else {
        capital.classList.remove("valid"); capital.classList.add("invalid");
      }

      var numbers = /[0-9]/g;
      if(myInput.value.match(numbers)) {
        number.classList.remove("invalid"); number.classList.add("valid");
      } else {
        number.classList.remove("valid"); number.classList.add("invalid");
      }

      if(myInput.value.length >= 8) {
        length.classList.remove("invalid"); length.classList.add("valid");
      } else {
        length.classList.remove("valid"); length.classList.add("invalid");
      }
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

if(myInput) myInput.addEventListener("change", checkMatch);
if(confirmPassword) confirmPassword.addEventListener("keyup", checkMatch);

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
  if (document.getElementById("genM") && document.getElementById("genM").checked) gender = "Male";
  if (document.getElementById("genF") && document.getElementById("genF").checked) gender = "Female";
  if (document.getElementById("genN") && document.getElementById("genN").checked) gender = "Non-Binary";

  var tobacco = "";
  if (document.getElementById("tobY") && document.getElementById("tobY").checked) tobacco = "Yes";
  if (document.getElementById("tobN") && document.getElementById("tobN").checked) tobacco = "No";

  var allergies = [];
  if (document.getElementById("alg1") && document.getElementById("alg1").checked) allergies.push("Seafood");
  if (document.getElementById("alg2") && document.getElementById("alg2").checked) allergies.push("Peanuts");
  if (document.getElementById("alg3") && document.getElementById("alg3").checked) allergies.push("Sulfa Drugs");
  if (document.getElementById("alg4") && document.getElementById("alg4").checked) allergies.push("Penicillin");
  if (document.getElementById("alg5") && document.getElementById("alg5").checked) allergies.push("Latex");
  
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
