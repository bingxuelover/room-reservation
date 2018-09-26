var gulp = require('gulp');
var browserSync = require('browser-sync')
var sass = require('gulp-sass');
var reload = browserSync.reload;

/* 启动服务， 监视文件改动并重新载入 */
gulp.task('sass', function() {
  return gulp.src('src/sass/*.scss').pipe(sass()).pipe(gulp.dest('dist/css'))
  // 触发重新加载
    .pipe(reload({stream: true}));
});

// 监视 sass 文件的改动，如果发生变更，运行 'sass' 任务，并且重载文件
gulp.task('serve', ['sass'], function() {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });
  //html有变化时，reload
  gulp.watch(['*.html'], {
    cwd: 'dist'
  }, reload);
  //scss文件有变化时，执行sass
  gulp.watch('src/sass/*.scss', ['sass']);
});
