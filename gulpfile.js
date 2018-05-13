const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('styles', () => {
		gulp.src('sass/app.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
	})

gulp.task('default', () => {
		gulp.watch('sass/app.scss', ['styles'], () => {
			console.log('watching css changes...')
		})
	})

