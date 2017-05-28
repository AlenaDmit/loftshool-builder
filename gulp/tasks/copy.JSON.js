/**
 * Created by Алёна on 27.05.2017.
 */

module.exports = function() {
    $.gulp.task('copy.JSON', function() {
        return $.gulp.src('./source/*.json', { since: $.gulp.lastRun('copy.JSON') })
            .pipe($.gulp.dest($.config.root));
    });
};
