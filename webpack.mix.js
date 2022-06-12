const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
require('laravel-mix-merge-manifest');

mix.js('resource/dist/js/app.js', 'resource/js/app.js')
    .sass('resource/dist/scss/app.scss', 'resource/css/app.css')
    .sourceMaps();