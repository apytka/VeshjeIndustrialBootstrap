var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
const terser = require("gulp-terser");

var cssDest = 'style';
var cssInputFile = 'source/style.scss';
var watchedFiles = './source/**/*.scss';
var watchedHtmlFiles = './*.html';
var watchedScssFiles = 'source/custom/**/*.scss';
var watchedJsFiles = './js/*.js';

function buildcss(){
	return gulp.src(cssInputFile)
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(gulp.dest(cssDest));
		// .pipe(browserSync.stream());
}

function buildjs(){
  return gulp.src(watchedJsFiles)
    .pipe(concat('main.js'))
    .pipe(terser())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest('./js/custom/'));
    // .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
  	server: {
  		baseDir: './'
  	}
  });
  gulp.watch(watchedFiles, buildcss);
  gulp.watch(watchedJsFiles, buildjs);
  gulp.watch(watchedFiles).on('change', browserSync.reload);
  gulp.watch(watchedHtmlFiles).on('change', browserSync.reload);
  gulp.watch(watchedJsFiles).on('change', browserSync.reload);
}

exports.buildcss = buildcss;
exports.buildjs = buildjs;
exports.watch = watch;