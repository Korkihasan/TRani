var grafix = {
  setBackgroundColor: function () {
    var elms = document.querySelectorAll("[data-bg-image]");
    if (typeof elms != "undefined" && elms != null) {
      elms.forEach(function (elem) {
        elem.style.backgroundImage = `url("${elem.getAttribute("data-bg-image")}")`;
        elem.removeAttribute("data-bg-image");
      });
    }
  },
  initNavbar: function () {
    var header = $(".header");
    var position = $(window).scrollTop();

    if ($(window).width() > 992) {
      $("body").bootnavbar({
        animation: false,
      });
    }

    $(window).on("scroll", function () {
      header.toggleClass("is-sticky", $(this).scrollTop() > header.height() + header.height() / 4);

      var scroll = $(window).scrollTop();

      if (scroll < position) {
        header.removeClass("is-scroll");
      } else {
        header.addClass("is-scroll");
      }

      position = scroll;
    });

    // Dropdown Toggler
    // if ($(".header-main .dropdown .dropdown-menu").length > 0) {
    //   $(".header-main .dropdown").append(
    //     '<div class="dropdown-toggler"><i class="icon icon-chevron-down" aria-hidden="true"></i></div>'
    //   );
    //   $(".header-main .dropdown .dropdown-toggler").on("click", function () {
    //     $(this).toggleClass("active");
    //     $(this).parent(".dropdown").siblings(".dropdown").removeClass("show");
    //     $(this).prev(".dropdown-menu").find(".dropdown").removeClass("show");
    //     $(this).prev(".dropdown-menu").find(".dropdown-menu").slideUp(300);
    //     $(this).parent(".dropdown").siblings(".dropdown").find(".dropdown-menu").slideUp(300);
    //     $(this).parent(".dropdown").toggleClass("show");
    //     $(this).prev(".dropdown-menu").slideToggle(500);
    //   });
    // }

    // $(".header-toggle-menu").on("click", function () {
    //   header.toggleClass("show-menu");
    //   $("html").toggleClass("overflow-hidden");
    // });
  },
  initLightbox: function () {
    var lightbox = $(".js-lightbox");
    var lightboxVideo = $(".js-lightbox-video");
    var gallery = $(".js-gallery");

    lightbox.each(function () {
      $(this).magnificPopup({
        type: "image",
      });
    });
    lightboxVideo.each(function () {
      $(this).magnificPopup({
        type: "iframe",
        iframe: {
          markup:
            '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            "</div>",
          patterns: {
            youtube: {
              index: "youtube.com/",
              id: "v=",
              src: "//www.youtube.com/embed/%id%?autoplay=1",
            },
            vimeo: {
              index: "vimeo.com/",
              id: "/",
              src: "//player.vimeo.com/video/%id%?autoplay=1",
            },
            gmaps: {
              index: "//maps.google.",
              src: "%id%&output=embed",
            },
          },
          srcAction: "iframe_src",
        },
      });
    });
    gallery.each(function () {
      $(this).magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
          enabled: true,
          tCounter: '<span class="mfp-counter">%curr% / %total%</span>',
        },
      });
    });
  },
  // inputValChanger: function () {
  //   $(".stepper .js-input-qty").on("keyup keydown keypress", function (e) {
  //     var key = e.key;
  //     var value = $(this).val();

  //     if (value.length == 0) {
  //       $(this).val(1);
  //     } else {
  //       if (key == 8 || key == 46 || key == 48) {
  //         $(this).val().length == 0 && $(this).val(1);
  //       }
  //       value = value.replace(/^(0*)/, "");
  //       $(this).val(value);
  //     }
  //   });
  //   $(".stepper .js-input-qty").focusout(function () {
  //     $(this).val().length == 0 && $(this).val(1);
  //   });
  //   $(document).on("click", ".js-btn-input-inc", function () {
  //     if ($(this).parent("span").parent(".stepper").find(".js-input-qty").length > 0) {
  //       var $n = $(this).parent("span").parent(".stepper").find(".js-input-qty");
  //     }
  //     $n.val(Number($n.val()) + 1);
  //   });
  //   $(document).on("click", ".js-btn-input-dec", function () {
  //     if ($(this).parent("span").parent(".stepper").find(".js-input-qty").length > 0) {
  //       var $n = $(this).parent("span").parent(".stepper").find(".js-input-qty");
  //     }
  //     var amount = Number($n.val());
  //     amount > 1 && $n.val(amount - 1);
  //   });
  // },
  bsModalBackdropFix: function () {
    document.querySelectorAll(".modal").forEach(function (item, index) {
      item.addEventListener("show.bs.modal", function () {
        if (document.querySelectorAll(".modal-backdrop").length > 1) {
          [document.querySelectorAll(".modal-backdrop:not(.first)")].map((item) => item[0].remove());
        }
      });
      item.addEventListener("hide.bs.modal", function () {
        if (document.querySelectorAll(".modal-backdrop").length > 1) {
          [document.querySelectorAll(".modal-backdrop")].map((item) => item[0].remove());
        }
      });
    });
  },
  searchModal: function () {
    var modalSearch = document.getElementById("modalSearch");
    var htmlNode = document.querySelector("html");

    modalSearch.addEventListener("show.bs.modal", function (event) {
      htmlNode.classList.add = "overflow-hidden";
    });
    modalSearch.addEventListener("hidden.bs.modal", function (event) {
      htmlNode.classList.remove = "overflow-hidden";
    });
  },
  init: function () {
    this.setBackgroundColor();
    this.initNavbar();
    this.initLightbox();
    // this.inputValChanger();
    this.bsModalBackdropFix();
    this.searchModal();
  },
};
document.addEventListener("DOMContentLoaded", function () {
  grafix.init();
});

// define all UI variable
const navToggler = document.querySelector(".nav-toggler");
const toggler = document.querySelector(".btntoggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");
const overflow = document.querySelector("body");

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  toggler.addEventListener("click", btntogglerClick);

  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  toggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
  overflow.classList.toggle("body-overflow");
}
function btntogglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
  overflow.classList.toggle("body-overflow");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}

setTimeout(function () {
  $(".preloader-bg").fadeToggle();
}, 1500);

var day = new Date();
var dayofweek = day.getDay();

if (dayofweek == 1) {
  document.getElementById("monday").classList.add("show");
  document.getElementById("monday").classList.add("active");
  document.getElementById("monday-tab").classList.add("show");
  document.getElementById("monday-tab").classList.add("active");
} else if (dayofweek == 2) {
  document.getElementById("tuesday").classList.add("show");
  document.getElementById("tuesday").classList.add("active");
  document.getElementById("tuesday-tab").classList.add("show");
  document.getElementById("tuesday-tab").classList.add("active");
} else if (dayofweek == 3) {
  document.getElementById("wednesday").classList.add("show");
  document.getElementById("wednesday").classList.add("active");
  document.getElementById("wednesday-tab").classList.add("show");
  document.getElementById("wednesday-tab").classList.add("active");
} else if (dayofweek == 4) {
  document.getElementById("thursday").classList.add("show");
  document.getElementById("thursday").classList.add("active");
  document.getElementById("thursday-tab").classList.add("show");
  document.getElementById("thursday-tab").classList.add("active");
} else if (dayofweek == 5) {
  document.getElementById("friday").classList.add("show");
  document.getElementById("friday").classList.add("active");
  document.getElementById("friday-tab").classList.add("show");
  document.getElementById("friday-tab").classList.add("active");
} else if (dayofweek == 6) {
  document.getElementById("saturday").classList.add("show");
  document.getElementById("saturday").classList.add("active");
  document.getElementById("saturday-tab").classList.add("show");
  document.getElementById("saturday-tab").classList.add("active");
} else {
  document.getElementById("Sunday").classList.add("show");
  document.getElementById("Sunday").classList.add("active");
  document.getElementById("Sunday-tab").classList.add("show");
  document.getElementById("Sunday-tab").classList.add("active");
}
