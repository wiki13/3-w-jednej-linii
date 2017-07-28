'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
let cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('compress_css', function () {
  return   gulp.src(['./css/*.css','!./css/*-min.css'])
        .pipe(cssmin())
        .pipe(rename({suffix: '-min'}))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('prefix',function(){
  return   gulp.src(['./css/*.css','!./css/*-min.css'])
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('compress_js', function() {
  return gulp.src('./js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'-min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream());
});


gulp.task('default', function(){
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./sass/*.scss", gulp.series('sass','prefix','compress_css'));
  gulp.watch("./js/*.js", gulp.series('compress_js'));
  gulp.watch("./*.html").on('change', browserSync.reload);
});
