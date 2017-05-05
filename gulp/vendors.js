'use strict'

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var debug = require('gulp-debug');

// Get JS files from the "main" property in each bower.json from the Vendors/
// folder and minify into one file
var jsFilter = '**/*.js';
var scssCssFilter = '**/*.{scss,css}';
var fontFilter = '**/*.{otf,eot,svg,ttf,woff,woff2}';

var paths = {
    'destination': './public/',
    'assets': './assets/'
};

gulp.task('bowerExtract', [
    'jsBowerExtract',
    'scssCssBowerExtract',
    'fontsBowerExtract'
]);

gulp.task('jsBowerExtract', function () {
    return gulp.src( mainBowerFiles({ filter: jsFilter }) )
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(paths.destination + 'app/'));
});

gulp.task('scssCssBowerExtract', function () {
    var filesCollection = [ paths.assets + 'sass/vendors-config.scss' ]
        .concat(mainBowerFiles({ filter: scssCssFilter }));

    return gulp.src( filesCollection )
        .pipe(sass({
            includePaths: [
                'bower_components/bootstrap-sass/assets/stylesheets',
                'bower_components/font-awesome/scss'
            ]
        }).on('error', sass.logError))
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(paths.destination + 'stylesheets/'));
});

gulp.task('fontsBowerExtract', function () {
    // TODO: Extract Fonts from Bower dependencies and place them into /public/fonts
    return gulp.src(mainBowerFiles({
        filter: fontFilter,
        overrides: {
            'font-awesome': {
                'main': [ 'fonts/**.*' ]
            }
        }
    }))
    .pipe(gulp.dest(paths.destination + 'fonts/'));
});
