const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const browserSync = require('browser-sync').create();


gulp.task('styles', () => {
  return gulp.src('./dev/less/*.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('dev', () => {
  browserSync.init({
    proxy: 'http://test.loc/',
    files: [
      './css/*.css',
    ]
  });
  gulp.watch('dev/less/**/*.less', ['styles']);
});