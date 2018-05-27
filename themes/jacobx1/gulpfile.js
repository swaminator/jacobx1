var gulp = require('gulp')
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
  minifyCSS = require('gulp-minify-css'),
  watch = require('gulp-watch'),
  sass = require('gulp-sass');

gulp.task('compress', function() {
  gulp.src(['assets/js/jquery.min.js', 'assets/js/jquery.prettysocial.min.js', 'assets/js/rainbow-custom.min.js', 'assets/js/scripts.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('static/js/'));
  gulp.src('assets/css/blog.scss')
    .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(concat('all.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('static/css/'));
});

gulp.task('watch', () => {
  gulp.watch('assets/**', ['compress']);
});
