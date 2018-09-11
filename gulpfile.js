const gulp = require('gulp')
const sass = require('gulp-sass')
const minifycss = require('gulp-minify-css')

gulp.task('styles', () => {
		gulp.src('sass/app.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
	})

gulp.task('css', () =>{
		gulp.src('css/app.css')
		.pipe(minifycss())
		.pipe(gulp.dest('css/'))
	})

gulp.task('default', () => {
		gulp.watch(['sass/app.scss', 'sass/_responsive.scss'], ['styles'], () => {
			console.log('watching css changes...')
		})
	})

