'use strict';

module.exports = function() {
  $.gulp.task('js.blog', function() {
    return $.gulp.src($.path.blog)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('blog.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
