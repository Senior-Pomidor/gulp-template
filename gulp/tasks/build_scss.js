const sass = require('gulp-sass')(require('sass'));
const bulk = require('gulp-sass-bulk-importer');
const clean = require('gulp-clean-css');
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');

module.exports = build_scss = () => {
	return app.gulp.src('src/styles/main.scss')
		.pipe(map.init())
		.pipe(bulk())
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(clean({
			level: 2
		}))
		.pipe(concat('style.min.css'))
		.pipe(map.write('../sourcemaps/'))
		.pipe(app.gulp.dest('build/styles/'))
		.pipe(app.browsersync.stream());
}
