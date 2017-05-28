'use strict';

module.exports = function() {
    $.gulp.task('js.excellentSlider', function() {
        return $.gulp.src($.path.excellentSlider)
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.concat('excellentSlider.js'))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.config.root + '/assets/js'))
    })
};
