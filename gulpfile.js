var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');

//Compilador sass
gulp.task('sass', function() {
    gulp.src('./source/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist'))
});
//conatenar JS
gulp.task('concatenar', function() {
    return gulp.src([
        //'./bower_components/jquery/dist/jquery.js',
        './bower_components/foundation-sites/dist/foundation.js',
        './bower_components/angular/angular.js',
        './bower_components/angular-route/angular-route.js',
        './bower_components/angular-local-storage/dist/angular-local-storage.js',
        './source/app/**/*.js'
    ])
    .pipe(plumber())
    .pipe(concat('app.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('./dist'));
});
//Watcher default
gulp.task('default', ['sass', 'concatenar'], function() {
    gulp.watch('./source/sass/**/*.scss', ['sass']);
    gulp.watch('./source/app/**/*.js', ['concatenar']);
});
