let mix = require("laravel-mix");

mix
  .setPublicPath("./")
  .sass("assets/sass/popup.scss", "dist/css")
  .js("assets/js/popup.js", "dist/js")
  .vue()
  .options({
    processCssUrls: false,
  });
