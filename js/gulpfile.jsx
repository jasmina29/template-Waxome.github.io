// Sass configuration
var plumber = require('gulp-plumber');
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('scss/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('css/')) 
      
});

gulp.task('default', ['sass'], function() {
    gulp.watch('scss/*.scss', ['sass']);
})