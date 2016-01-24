// Modules.
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    wrap = require('gulp-wrap'),
    ngAnnotate = require('gulp-ng-annotate'),
    liveReload = require('connect-livereload'),
    express = require('express'),
    liveReloadServer = require('tiny-lr')(),
    karmaServer = require('karma').Server,
    minifyCss = require('gulp-minify-css'),
    templateCache = require('gulp-angular-templatecache');

// Parameters.
var livereloadPort = 35729,
    serverPort = 5000,
    karmaConfigPath = __dirname + '\\tests\\config\\karma\\karma.js';

// Set up an express server.
var server = express();

// Add live reload.
server.use(liveReload({ port: livereloadPort }));

// Use 'build' folder as root.
server.use(express.static('./build'));

// This redirects everything back to index.html (HTML5 pushstate).
server.all('/*', function (request, response) {
    response.sendFile('index.html', { root: 'build' });
});

gulp.task('jshint', function () {
    gulp.src('source/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// JS.
gulp.task('js', function () {
    gulp.src('source/**/*.js')
        .pipe(ngAnnotate())
        .pipe(wrap('(function(){<%=contents%>})();'))
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/js'));
});

// CSS.
gulp.task('css', function () {
    gulp.src('source/**/*.less')
        .pipe(less())
        .pipe(concat('app.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('build/css'));
});

// Images.
gulp.task('images', function () {
    gulp.src('source/**/*.png')
        .pipe(gulp.dest('build/css'));
});

// Views.
gulp.task('views', function () {
    gulp.src('source/index.html')
        .pipe(gulp.dest('build/'));

    gulp.src('source/views/**/*.html')
        .pipe(templateCache('views.js',
            {
                module: 'app.views',
                root: 'views/',
                standAlone: false
            }))
        .pipe(gulp.dest('build/js'));
});

// Libraries.
gulp.task('libraries', function () {
    gulp.src('node_modules/angular/**/*')
        .pipe(gulp.dest('build/libraries/angular'));
    gulp.src('node_modules/angular-resource/**/*')
        .pipe(gulp.dest('build/libraries/angular-resource'));
    gulp.src('node_modules/angular-route/**/*')
        .pipe(gulp.dest('build/libraries/angular-route'));
    gulp.src('node_modules/angularjs-bem/**/*')
        .pipe(gulp.dest('build/libraries/angularjs-bem'));
    gulp.src('node_modules/angular-chart.js/**/*')
        .pipe(gulp.dest('build/libraries/angular-chart.js'));
    gulp.src('node_modules/angular-chart.js/node_modules/chart.js/**/*')
        .pipe(gulp.dest('build/libraries/chart.js'));
    gulp.src('node_modules/bootstrap/**/*')
        .pipe(gulp.dest('build/libraries/bootstrap'));
});

// Watchers.
gulp.task('watch', ['jshint'], function () {
    // JS.
    gulp.watch(['source/**/*.js'], [
        'jshint',
        'js'
    ]);

    // CSS.
    gulp.watch(['source/**/*.less'], [
        'css'
    ]);

    // Images.
    gulp.watch(['source/**/*.png'], [
        'images'
    ]);

    // Views.
    gulp.watch(['source/index.html', 'source/views/**/*.html'], [
        'views'
    ]);

    // Libraries.
    gulp.watch([
        'node_modules/angular/**/*',
        'node_modules/angular-resource/**/*',
        'node_modules/angular-route/**/*',
        'node_modules/angularjs-bem/**/*',
        'node_modules/angular-chart.js/**/*',
        'node_modules/angular-chart.js/node_modules/chart.js/**/*',
        'node_modules/bootstrap/**/*'
    ], [
        'libraries'
    ]);
});

// Build.
gulp.task('build', ['js', 'css', 'views', 'images', 'libraries']);

gulp.task('start', function () {
    // Start web server.
    server.listen(serverPort);

    // Start live reload.
    liveReloadServer.listen(livereloadPort);

    // Run the watch task, to track changes.
    gulp.start(['build', 'watch']);
});

// Unit tests.
gulp.task('unit-test', function (complete) {
    new karmaServer({
        configFile: karmaConfigPath,
        singleRun: false
    }, complete).start();
});

gulp.task('unit-test-once', function (complete) {
    new karmaServer({
        configFile: karmaConfigPath,
        singleRun: true
    }, complete).start();
});