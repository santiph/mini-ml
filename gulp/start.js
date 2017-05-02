'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

// We'd need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon
const BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', function (cb) {
    var called = false;
    var stream = nodemon({
        
        // nodemon our expressjs server
        script: './bin/www',
        
        // watch core server file(s) that require server restart on change
        watch: ['app.js', 'bin/*', 'lib/*', 'views/*']
    })
    .on('start', function onStart() {
        // ensure start only got called once
        if (!called) { cb(); }
        called = true;
    })
    .on('restart', function onRestart() {
        console.log('restarted!')
        // reload connected browsers after a slight delay
        setTimeout(function reload() {
            browserSync.reload({
                stream: false
            });
        }, BROWSER_SYNC_RELOAD_DELAY);
    })
    .on('crash', function() {
        console.error('Application has crashed!\n')
        stream.emit('restart', 10)  // restart the server in 10 seconds 
    });

    return stream;
});

gulp.task('browser-sync', ['nodemon'], function () {
    
    // for more browser-sync config options: http://www.browsersync.io/docs/options/
    browserSync({
        
        // informs browser-sync to proxy our expressjs app which would run at the following location
        proxy: 'http://localhost:3000',
        
        // informs browser-sync to use the following port for the proxied app
        // notice that the default port is 3000, which would clash with our expressjs
        port: 4000,
        
        // open the proxied app in chrome
        browser: ['google chrome']
    });
});
