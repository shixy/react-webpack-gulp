var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');

gulp.task('watch', function() {
  // js
  watch(config.src + '/**/*.*', function() {
    gulp.start(['webpack']);
  });

  // html
  watch(config.src + '/**/*.html', function() {
    gulp.start(['copy']);
  });
});
