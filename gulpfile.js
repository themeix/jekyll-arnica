'use strict';

var gulp = require('gulp');
var sass  = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {
    return gulp.src('./assets/scss/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./assets/css/'));
});

// Watch Task
gulp.task('watch', function() {
     gulp.watch('./assets/scss/**/*.scss', gulp.series('sass'));
  });
