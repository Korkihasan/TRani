var day = new Date();
var dayofweek = day.getDay();

if (dayofweek == 0) {
  document.getElementById("monday").classList.add("show active");
  document.getElementById("monday-tab").classList.add("show active");
} else if (dayofweek == 1) {
  document.getElementById("tuesday").classList.add("show active");
  document.getElementById("tuesday-tab").classList.add("show active");
} else if (dayofweek == 2) {
  document.getElementById("wednesday").classList.add("show active");
  document.getElementById("wednesday-tab").classList.add("show active");
} else if (dayofweek == 3) {
  document.getElementById("thursday").classList.add("show active");
  document.getElementById("thursday-tab").classList.add("show active");
} else if (dayofweek == 4) {
  document.getElementById("friday").classList.add("show active");
  document.getElementById("friday-tab").classList.add("show active");
} else if (dayofweek == 5) {
  document.getElementById("saturday").classList.add("show active");
  document.getElementById("saturday-tab").classList.add("show active");
} else {
  document.getElementById("Sunday").classList.add("show active");
  document.getElementById("Sunday-tab").classList.add("show active");
}
