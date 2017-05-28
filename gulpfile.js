'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    template: require('./gulp/paths/template.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js'),
    wp1: require('./gulp/paths/wp1.js'),
    wp2: require('./gulp/paths/wp2.js'),
    blog: require('./gulp/paths/blog.js'),
    excellentSlider: require('./gulp/paths/excellentSlider.js'),
    preload: require('./gulp/paths/preload.js'),
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'jade',
    'js.foundation',
    'js.excellentSlider',
    'js.process',
    'js.process1',
    'js.process2',
    'js.blog',
    'js.preload',
    'copy.image',
    'copy.JSON',
    'copy.fonts',
    'css.foundation'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
