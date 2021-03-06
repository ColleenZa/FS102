// Home Page Gallery

let i = 0; // current slide
let x = 5; // total slides

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");

function next() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (x + i + 1) % x;
  document.getElementById("content" + (i + 1)).classList.add("active");
  indicator(i + 1);
}

function prev() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (x + i - 1) % x;
  document.getElementById("content" + (i + 1)).classList.add("active");
  indicator(i + 1);
}

function indicator(num) {
  dots.forEach(function (dot) {
    dot.style.backgroundColor = "transparent";
  });
  document.querySelector(
    ".dot-container button:nth-child(" + num + ")"
  ).style.backgroundColor = "#107e31";
}

function dot(index) {
  images.forEach(function (image) {
    image.classList.remove("active");
  });
  document.getElementById("content" + index).classList.add("active");
  i = index - 1;
  indicator(index);
}

// FAQ
const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {

      content.style.maxHeight = null;
    } else {

      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

// Countdown Timer
function makeTimer() {
  var endTime = new Date("3 May 2022 9:56:00 GMT+01:00");
  endTime = Date.parse(endTime) / 1000;

  var now = new Date();
  now = Date.parse(now) / 1000;

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  $("#days").html(days + "<span>Days</span>");
  $("#hours").html(hours + "<span>Hours</span>");
  $("#minutes").html(minutes + "<span>Minutes</span>");
  $("#seconds").html(seconds + "<span>Seconds</span>");
}

setInterval(function () {
  makeTimer();
}, 1000);

// Nav Bar
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById("navbar");
  var current_pos = nav.offsetTop;
  window.onscroll = function () {
    var window_pos = document.documentElement.scrollTop;
    if (window_pos >= current_pos) {
      nav.classList.add("sticky");
    }
    else {
      nav.classList.remove("sticky");
    }
  }
})
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");

allEventListners();

function allEventListners() {

  navToggler.addEventListener("click", togglerClick);
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}
// Scroll to top
function goToTop() {
  window.scrollTo(0, 0);
}
// Login Page - My Account
var modal = document.getElementById("id01");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Registration Page
var modal = document.getElementById("id02");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onload = init;

function init() {
  document.getElementById("formTest").onsubmit = validateForm;
  document.getElementById("btnReset").onclick = clearForm;
  document.getElementById("txtName").focus();
}

function validateForm(theForm) {
  with (theForm) {
    return (isNotEmpty(txtName, "Please enter your name!", elmNameError)
      && isNumeric(txtZipcode, "Please enter a 6-digit Postal code!", elmZipcodeError)
      && isLengthMinMax(txtZipcode, 6, 6, "Please enter a 6-digit Postal code!", elmZipcodeError)
      && isSelected(selCountry, "Please make a selection!", elmCountryError)
      && isChecked("gender", "Please check a gender!", elmGenderError)
      && isChecked("color", "Please check a Race Category!", elmColorError)
      && isNumeric(txtPhone, "Please enter a valid phone number!", elmPhoneError)
      && isValidEmail(txtEmail, "Enter a valid email!", elmEmailError)
      && isValidPassword(txtPassword, "Password shall be 6-8 characters!", elmPasswordError)
      && verifyPassword(txtPassword, txtPWVerified, "Different from new password!",
        elmPWVerifiedError)
    );
  }
}

function postValidate(isValid, errMsg, errElm, inputElm) {
  if (!isValid) {
    if (errElm !== undefined && errElm !== null
      && errMsg !== undefined && errMsg !== null) {
      errElm.innerHTML = errMsg;
    }
    if (inputElm !== undefined && inputElm !== null) {
      inputElm.classList.add("errorBox");
      inputElm.focus();
    }
  } else {
    if (errElm !== undefined && errElm !== null) {
      errElm.innerHTML = "";
    }
    if (inputElm !== undefined && inputElm !== null) {
      inputElm.classList.remove("errorBox");
    }
  }
}

function isNotEmpty(inputElm, errMsg, errElm) {
  var isValid = (inputElm.value.trim() !== "");
  postValidate(isValid, errMsg, errElm, inputElm);
  return isValid;
}

function isNumeric(inputElm, errMsg, errElm) {
  var isValid = (inputElm.value.trim().match(/^\d+$/) !== null);
  postValidate(isValid, errMsg, errElm, inputElm);
  return isValid;
}

function isAlphabetic(inputElm, errMsg, errElm) {
  var isValid = (inputElm.value.trim().match(/^[a-zA-Z]+$/) !== null);
  postValidate(isValid, errMsg, errElm, inputElm);
  return isValid;
}

function isAlphanumeric(inputElm, errMsg, errElm) {
  var isValid = (inputElm.value.trim().match(/^[0-9a-zA-Z]+$/) !== null);
  postValidate(isValid, errMsg, errElm, inputElm);
  return isValid;
}

function isLengthMinMax(inputElm, minLength, maxLength, errMsg, errElm) {
  var inputValue = inputElm.value.trim();
  var isValid = (inputValue.length >= minLength) && (inputValue.length <= maxLength);
  postValidate(isValid, errMsg, errElm, inputElm);
  return isValid;
}

function isValidEmail(inputElm, errMsg, errElm) {
  var isValid = (inputElm.value.trim().match(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) !== null);
  postValidate(isValid, errMsg, errElm, inputElm);
  return isValid;
}

function isSelected(selectElm, errMsg, errElm) {
  var isValid = (selectElm.value !== "");
  postValidate(isValid, errMsg, errElm, selectElm);
  return isValid;
}


function isChecked(inputName, errMsg, errElm) {
  var elms = document.getElementsByName(inputName);
  var isChecked = false;
  for (var i = 0; i < elms.length; ++i) {
    if (elms[i].checked) {
      isChecked = true;
      break;
    }
  }
  postValidate(isChecked, errMsg, errElm, null);
  return isChecked;
}

function isValidPassword(inputElm, errMsg, errElm) {
  var isValid = (inputElm.value.trim().match(/^\w{6,8}$/) !== null);
  postValidate(isValid, errMsg, errElm, inputElm);
  return isValid;
}

function verifyPassword(pwElm, pwVerifiedElm, errMsg, errElm) {
  var isTheSame = (pwElm.value === pwVerifiedElm.value);
  postValidate(isTheSame, errMsg, errElm, pwVerifiedElm);
  return isTheSame;
}


function clearForm() {
  var elms = document.querySelectorAll('.errorBox');
  for (var i = 0; i < elms.length; i++) {
    elms[i].classList.remove("errorBox");
  }

  elms = document.querySelectorAll('[id$="Error"]');
  for (var i = 0; i < elms.length; i++) {
    elms[i].innerHTML = "";
  }

  document.getElementById("txtName").focus();
}

//   Terms and condition under Race table
$(function () {
  $("#TandC").click(function () {
    $("div#hidden").toggle();
    return false;
  });
});

// Contact Us Page
function validate() {
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if (name.length < 2) {
    text = "Name should contain > 2 characters.";
    error_message.innerHTML = text;
    alert("Please Enter valid Name.");
    return false;
  }
  if (subject.length < 5) {
    text = "Subject should contain > 5 characters.";
    error_message.innerHTML = text;
    alert("Please Enter valid Subject.");
    return false;
  }
  if (isNaN(phone) || phone.length != 8) {
    text = "8-digit Phone Number only";
    error_message.innerHTML = text;
    alert("Please Enter a valid Phone Number.");
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please include an'@' in the email address e.g.Abc@gmail.com";
    error_message.innerHTML = text;
    alert("Please Enter valid Email.");
    return false;
  }
  if (message.length <= 5) {
    text = "Please Enter More Than 5 Characters";
    error_message.innerHTML = text;
    alert("Please elaborate on your message.");
    return false;
  }
  alert("Form Submitted Successfully! We will reply to you within 3-5 working days.");
  return true;
}
// Pop - up Notification
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// On page Load
$(window).on('load', function () {
  var preLoad = $(".preLoader");
  preLoad.fadeOut(1500);
});