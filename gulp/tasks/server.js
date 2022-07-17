module.exports = server = () => {
	app.browsersync.init({
		server: {
			baseDir: 'build'
		},
		notify: false,
		port: 3000
	})
}
