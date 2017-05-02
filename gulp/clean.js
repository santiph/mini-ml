'use strict';

var gulp = require('gulp');
var rimraf = require('rimraf');

// Cleans the public directory
gulp.task('clean', function (cb) {
    rimraf('./public', cb);
});