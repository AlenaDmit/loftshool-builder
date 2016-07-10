'use strict';

module.exports = function() {
  $.gulp.task('js.preload', function() {
    return $.gulp.src($.path.preload)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('preload.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
