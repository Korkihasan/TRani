var slider = document.getElementById("index-slider");

if (slider) {
  $(".index-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<i class="fa fa-chevron-left left_arrow">',
    nextArrow: '<i class="fa fa-chevron-right right_arrow">',
  });
}
