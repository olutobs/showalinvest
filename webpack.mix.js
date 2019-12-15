const mix = require('laravel-mix');

mix.js('js/main.js', 'index.js')
   .sass('sass/main1.scss', 'index.css')
   .setPublicPath('public');