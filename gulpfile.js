const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./gulp/tasks');


// глобальная переменная для использования во всех тасках
global.app = {
	gulp
}

// галп задачи
exports.build_pug = tasks.build_pug;
exports.build_scss = tasks.build_scss;


// exports.default