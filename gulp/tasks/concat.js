var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../config');

// 合并react和reflux的lib js
gulp.task('concat', function() {
  return gulp.src([
      config.src + '/js/lib/react-with-addons.js',
      config.src + '/js/lib/reflux.js'
    ])
    .pipe(concat('react-with-reflux.js'))
    .pipe(gulp.dest(config.dest + '/js/'))
})
