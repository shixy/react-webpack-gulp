var gulp = require('gulp');
var config = require('../config');

// copy html
gulp.task('copy', function() {
  gulp.src([config.src + '/pages/index/*.html', config.src +
      '/pages/list/*.html'
    ])
    .pipe(gulp.dest(config.dest));
});
