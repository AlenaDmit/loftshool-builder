'use strict';

module.exports = function() {
  $.gulp.task('js.process1', function() {
    return $.gulp.src($.path.wp1)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('noframework.waypoints.min.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};

