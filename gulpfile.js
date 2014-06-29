var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshint_stylish = require('jshint-stylish');

var scripts = ['./static/**/*.js'] //, './test/**/*.js']

gulp.task('watch', function() {
  gulp.watch(scripts, ['lint', 'build']);
});

gulp.task('lint', function() {
  gulp.src(scripts)
    .pipe(jshint())
    .pipe(jshint.reporter(jshint_stylish));
});

gulp.task('watch', function() {
  gulp.watch(scripts, ['lint']);
});

gulp.task('default', ['lint', 'watch']);
