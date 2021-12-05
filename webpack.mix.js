let mix = require('laravel-mix');

mix.options({
  processCssUrls: false,
  publicPath: ('./'),
});

mix.js('src/js/core.js', 'build');
mix.css('src/css/style.css', 'build');