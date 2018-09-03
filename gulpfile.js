
const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('styles', () => {
		gulp.src('sass/app.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
	})

gulp.task('default', () => {
		gulp.watch(['sass/app.scss', 'sass/_responsive.scss'], ['styles'], () => {
			console.log('watching css changes...')
		})
	})

