'use strict'

var gulp = require('gulp');
var browserSync = require('browser-sync');

var paths = {
    'destination': 'public/',
    'assets': 'assets/'
};

gulp.task('watch',
    [ 'watch:js', 'watch:css', 'watch:scss', 'watch:scss:variables', 'watch:templates', 'watch:i18n', 'watch:images', 'watch:favicon' ]
);

gulp.task('watch:js', function (cb) {
    return gulp.watch(paths.assets + '**/*.js', [ 'build:js', 'bs-reload' ]);
});

gulp.task('watch:css', function () {
    gulp.watch(paths.destination + '**/*.css', function () {
        gulp.src('public/**/*.css')
            .pipe(browserSync.reload({ stream: true }));
    });
});

gulp.task('watch:scss', function () {
    return gulp.watch(
        [ paths.assets + '**/*.scss',
            '!' + paths.assets + 'sass/variables.scss' ],
        [ 'build:sass' ]
    );
});

gulp.task('watch:scss:variables', function () {
    return gulp.watch(paths.assets + 'sass/variables.scss', [ 'scssCssBowerExtract' ]);
});

gulp.task('watch:templates', function () {
    return gulp.watch(paths.assets + '**/*.pug', [ 'build:templates', 'bs-reload' ]);
});

gulp.task('watch:i18n', function () {
    return gulp.watch(paths.assets + 'app/i18n/**/*', [ 'build:i18n', 'bs-reload' ]);
});

gulp.task('watch:images', function () {
    return gulp.watch(paths.assets + 'images/**/*', [ 'build:images', 'bs-reload' ]);
});

gulp.task('watch:favicon', function () {
    return gulp.watch(paths.assets + 'favicon.ico', [ 'build:favicon', 'bs-reload' ]);
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});
