let mix = require('laravel-mix');

mix.options({
  processCssUrls: false,
  publicPath: ('./'),
});

mix.js('src/js/core.js', 'build/script.js');
mix.sass('src/scss/core.scss', 'build/style.css');