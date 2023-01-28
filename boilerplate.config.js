module.exports = {
  archive: {
    input: "dist/**",
    output: "build/",
  },
  clean: ["dist/"],
  content: "./boilerplate.content.json",
  fonts: {
    input: [
      "src/iconfont/output/fonts/**/*",
      "src/fonts/**/*",
      "src/vendor/font-awesome/fonts/**/*",
      "src/vendor/slick/fonts/**/*",
    ],
    output: "dist/fonts/",
  },
  images: {
    input: ["src/images/**/*", "src/vendor/slick/ajax-loader.gif"],
    output: "dist/images",
    watch: ["src/images/**/*", "src/vendor/slick/ajax-loader.gif"],
  },
  uploads: {
    input: "src/uploads/**/*",
    output: "dist/uploads",
    watch: "src/uploads/**/*",
  },
  scripts: {
    copy: "node_modules/jquery/dist/jquery.min.js",
    input: [
      "src/vendor/bootstrap/js/bootstrap.bundle.min.js",
      "src/vendor/bootnavbar/js/bootnavbar.js",
      "src/vendor/magnific-popup/js/jquery.magnific-popup.min.js",
      "src/vendor/slick/slick.min.js",
      "src/vendor/mixitub/mixitup.min.js",
      "src/scripts/backToTop.js",
      "src/scripts/seasonal.js",
      "src/scripts/filter.js",
      "src/scripts/app.js",
      "src/scripts/slider.js",
      "src/scripts/navbar.js",
    ],
    output: "dist/js",
    watch: ["src/scripts/**/*.js", "src/vendor/**/*.js"],
  },
  server: {
    root: "dist/",
  },
  sprites: {
    input: "src/sprites/images/*.png",
    imgOutput: "src/images/",
    cssOutput: "src/styles/components/",
  },
  styles: {
    input: ["src/styles/*.scss"],
    output: "dist/css",
    watch: ["src/styles/**/*.scss", "src/vendor/**/*.scss"],
  },
  templates: {
    input: "src/templates/*.twig",
    output: "dist/",
    watch: "src/templates/**/*.twig",
  },
};
