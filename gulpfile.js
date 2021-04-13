const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

gulp.task('scss', () => {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('default', () => {
    browserSync.init({
        server: "./"
    });

    gulp.watch('./scss/*.scss', gulp.series('scss'));
    gulp.watch('./*.html').on('change', browserSync.reload);
});