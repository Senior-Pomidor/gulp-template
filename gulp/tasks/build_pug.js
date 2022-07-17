const pug = require('gulp-pug');

module.exports = build_pug = () => {
	return app.gulp.src('src/pages/**/*.pug')
		.pipe(pug())
		.pipe(app.gulp.dest('dist'));
}
