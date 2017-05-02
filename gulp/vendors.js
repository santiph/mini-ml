'use strict'

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var filter = require('gulp-filter');

// Get JS files from the "main" property in each bower.json from the Vendors/
// folder and minify into one file
var jsFilter = filter('**/*.js');
var cssFilter = filter('**/*.css');
var fontFilter = filter('**/*.{otf,eot,svg,ttf,woff,woff2}');

var destination = 'public/';

gulp.task('jsBowerExtract', function () {
    return gulp.src( mainBowerFiles() )
        .pipe(jsFilter)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(destination + 'javascripts'));
});

gulp.task('cssBowerExtract', function () {
    return gulp.src( mainBowerFiles() )
        .pipe(cssFilter)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(destination + 'stylesheets'));
});
