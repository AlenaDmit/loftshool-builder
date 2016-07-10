'use strict';

module.exports = function() {
  $.gulp.task('js.process2', function() {
    return $.gulp.src($.path.wp2)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('jquery.waypoints.min.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
