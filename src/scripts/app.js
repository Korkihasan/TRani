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
    this.featuredSlider();
    this.bsModalBackdropFix();
    this.searchModal();
  },
};
document.addEventListener("DOMContentLoaded", function () {
  grafix.init();
});
