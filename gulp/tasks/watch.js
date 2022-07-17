module.exports = watching = () => {
  app.gulp.watch('src/**/*.pug', app.gulp.parallel('build_pug'));
  app.gulp.watch('src/**/*.scss', app.gulp.parallel('build_scss'));
}
