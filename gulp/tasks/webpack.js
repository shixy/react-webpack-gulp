var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var config = require('../config');
var webpackConfig = require('../webpack.config.js');

// gulp.task('webpack', function(){
//   gulp.src(config.webpack.entry)
//       .pipe(webpack(config.webpack))
//       .pipe(gulpif(config.js.uglify, uglify()))
//       .pipe(gulp.dest(config.js.dest));
// });

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task('webpack', function(callback) {
  // run webpack
  devCompiler.run(function(err, stats) {
    if (err) throw new gutil.PluginError("webpack:build-dev", err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    callback();
  });
});
