'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var templateCache = require('gulp-angular-templatecache');
var pug = require('gulp-pug');

var paths = {
    'destination': 'public/',
    'assets': 'assets/'
}; 

gulp.task('build', [
    'build:sass',
    'build:js',
    'build:images',
    'build:i18n',
    'build:templates'
]);

gulp.task('build:favicon', function () {
    return gulp.src(paths.assets + 'favicon.ico')
        .pipe(gulp.dest(paths.destination));
});

gulp.task('build:js', function () {
    return gulp.src(paths.assets + 'app/**/*.js')
        .pipe(gulp.dest(paths.destination + 'app'));
});

gulp.task('build:sass', function () {
    return gulp.src(paths.assets + 'sass/styles.scss')
        .pipe(sass({
            //outputStyle: 'compressed',
            includePaths: [
                'assets/sass',
                'bower_components/bootstrap-sass/assets/stylesheets',
                'bower_components/font-awesome/scss'
            ]
        }).on('error', sass.logError))
        .pipe(gulp.dest(paths.destination + 'stylesheets'));
});

gulp.task('build:images', function() {
    return gulp.src(paths.assets + 'images/**/*')
        .pipe(gulp.dest(paths.destination + 'images/'));
});

gulp.task('build:templates', function () {
    return gulp.src(paths.assets + '**/*.pug')
        .pipe(pug())
        .pipe(templateCache('ml-app.templates.js', { module: 'mlApp' }))
        .pipe(gulp.dest(paths.destination + 'app'));
});

gulp.task('build:i18n', function() {
    return gulp.src(paths.assets + 'app/i18n/**/*')
        .pipe(gulp.dest(paths.destination + 'app/i18n/'));
});
