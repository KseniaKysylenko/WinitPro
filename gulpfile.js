var gulp = require('gulp');

var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('autoprefixer', function () {
    return gulp.src('./styles/*.css')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dest'));
});