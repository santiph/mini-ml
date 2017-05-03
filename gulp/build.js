'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
    'destination': 'public/',
    'assets': 'assets/'
}; 

gulp.task('build', [
    'build:sass',
    'build:js'
]);

gulp.task('build:favicon', function () {
    return gulp.src(paths.assets + 'favicon.ico')
        .pipe(gulp.dest(paths.destination));
});

gulp.task('build:js', function () {
    return gulp.src(paths.assets + 'javascript/**/*.js')
        .pipe(gulp.dest(paths.destination + 'javascripts'));
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
