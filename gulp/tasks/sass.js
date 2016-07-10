'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src([
    	'./source/style/app.scss',
    	'./source/style/index.scss',
    	'./source/style/myworks.scss',
      './source/style/about.scss',
      './source/style/blog.scss',
    	'./source/style/preload.scss',
    	])
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  });
  
};
