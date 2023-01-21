var mixer = mixitup(".mixup");

mixer.filter(".day").then(function (state) {
  console.log(state.totalShow === containerEl.querySelectorAll(".day").length); // true
});
