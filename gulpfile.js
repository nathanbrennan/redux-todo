var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');

var paths = {
  js: ['src/']
};

gulp.task('hello', function() {
  console.log('Hello world!');
});

gulp.task('build', function(debug) {
  debug = (debug === 'true');
  // TODO: Pass debug flag as parameter: build --debug true
  browserify(paths.js, { debug: debug })
    .transform(babelify)
    .bundle()
    .pipe(fs.createWriteStream('./web/bundle.js'));
});
