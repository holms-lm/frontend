'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var nano = require('cssnano');
var autoprefixer = require('autoprefixer');
// var autopref = require('gulp-autoprefixer')

sass.compiler = require('node-sass');
// .pipe(autopref({browsers:['last 2 version']}))
gulp.task('scss', function () {
  return gulp.src('./styles/scss/flex_style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([autoprefixer({browsers: ['last 5 versions']}), nano()]))
      .pipe(gulp.dest('./styles/'));
});

//const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imgmin', () =>
    gulp.src('./images/origin/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./images/optimized'))
);

//1340