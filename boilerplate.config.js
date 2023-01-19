module.exports = {
  archive: {
    input: "dist/**",
    output: "build/",
  },
  clean: ["dist/"],
  content: "./boilerplate.content.json",
  fonts: {
    input: ["src/iconfont/output/fonts/**/*", "src/fonts/**/*", "src/vendor/font-awesome/fonts/**/*"],
    output: "dist/fonts/",
  },
  images: {
    input: "src/images/**/*",
    output: "dist/images",
    watch: "src/images/**/*",
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
      "node_modules/swiper/swiper-bundle.min.js",
      "src/vendor/magnific-popup/js/jquery.magnific-popup.min.js",
      "src/vendor/slick/slick.min.js",
      "src/scripts/backToTop.js",
      "src/scripts/app.js",
      "src/scripts/slider.js",
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
