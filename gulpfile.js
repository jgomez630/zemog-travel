var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');

gulp.task('default',function(){
  console.log('Here is your default task.');
});

gulp.task('html',function(){
  console.log('Here is your HTML task.');
});

gulp.task('styles',function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssimport,cssvars,nested,autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function(){

  watch('./app/index.html',function(){
    gulp.start('html'); //starts html task
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });

});
