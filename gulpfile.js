'use strict';

var gulp = require('gulp');
var sequence = require('run-sequence');
var requireDir = require('require-dir');

// Include all gulp tasks
requireDir('./gulp');

gulp.task('default', function () {
    return sequence( 'clean',
        'build:favicon', // just to ensure /public is created before bower extraction
        [ 'jsBowerExtract',
        'cssBowerExtract',
        'build',
        'browser-sync' ],
        'watch' );
});
