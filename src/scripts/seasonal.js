var day = new Date();
var dayofweek = day.getDay();

if (dayofweek == 1) {
  var monday = document.getElementById("monday");
  var mondayTab = document.getElementById("monday-tab");

  if (monday) {
    monday.classList.add("show");
    monday.classList.add("active");
  }

  if (mondayTab) {
    mondayTab.classList.add("show");
    mondayTab.classList.add("active");
  }
} else if (dayofweek == 2) {
  var tuesday = document.getElementById("tuesday");
  var tuesdayTab = document.getElementById("tuesday-tab");

  if (tuesday) {
    tuesday.classList.add("show");
    tuesday.classList.add("active");
  }

  if (tuesdayTab) {
    tuesdayTab.classList.add("show");
    tuesdayTab.classList.add("active");
  }
} else if (dayofweek == 3) {
  var wednesday = document.getElementById("wednesday");
  var wednesdayTab = document.getElementById("wednesday-tab");

  if (wednesday) {
    wednesday.classList.add("show");
    wednesday.classList.add("active");
  }

  if (wednesdayTab) {
    wednesdayTab.classList.add("show");
    wednesdayTab.classList.add("active");
  }
} else if (dayofweek == 4) {
  var thursday = document.getElementById("thursday");
  var thursdayTab = document.getElementById("thursday-tab");

  if (thursday) {
    thursday.classList.add("show");
    thursday.classList.add("active");
  }

  if (thursdayTab) {
    thursdayTab.classList.add("show");
    thursdayTab.classList.add("active");
  }
} else if (dayofweek == 5) {
  var friday = document.getElementById("friday");
  var fridayTab = document.getElementById("friday-tab");

  if (friday) {
    friday.classList.add("show");
    friday.classList.add("active");
  }

  if (fridayTab) {
    fridayTab.classList.add("show");
    fridayTab.classList.add("active");
  }
} else if (dayofweek == 6) {
  var saturday = document.getElementById("saturday");
  var saturdayTab = document.getElementById("saturday-tab");

  if (saturday) {
    saturday.classList.add("show");
    saturday.classList.add("active");
  }

  if (saturdayTab) {
    saturdayTab.classList.add("show");
    saturdayTab.classList.add("active");
  }
} else {
  var sunday = document.getElementById("sunday");
  var sundayTab = document.getElementById("sunday-tab");

  if (sunday) {
    sunday.classList.add("show");
    sunday.classList.add("active");
  }

  if (sundayTab) {
    sundayTab.classList.add("show");
    sundayTab.classList.add("active");
  }
}
