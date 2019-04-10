'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
  return gulp.src('./scss_sass/scss/mainHolms.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./scss_sass/css'));
});
