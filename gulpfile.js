const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./gulp/tasks');
const browsersync = require('browser-sync');


// глобальная переменная для использования во всех тасках
global.app = {
	gulp,
	browsersync
}

// галп задачи
exports.build_pug = tasks.build_pug;
exports.build_scss = tasks.build_scss;
exports.server = tasks.server;

// наборы задач
const mainTasks = gulp.series(tasks.build_pug, tasks.build_scss);

// сценарии
exports.watch = gulp.series(
	mainTasks,
	gulp.parallel(tasks.watch, tasks.server)
);

exports.build = gulp.series (
	mainTasks
)
