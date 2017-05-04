'use strict'

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('css', function () {
    return gulp.src('public/**/*.css')
        .pipe(browserSync.reload({ stream: true }));
})

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('watch', function () {
    gulp.watch('public/**/*.js',   [browserSync.reload]);
    gulp.watch('public/**/*.css',  ['css']);
    gulp.watch('assets/sass/variables.scss',  ['scssCssBowerExtract']);
});
