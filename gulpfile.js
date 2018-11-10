let gulp = require('gulp');
let htmlmin = require('gulp-htmlmin');
let minify = require('gulp-minify');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');

//Creamos la tarea para el código JS
gulp.task('compress-js', function() {
    gulp.src(['www/js/*.js'])
        .pipe(concat('all.js'))
        .pipe(minify())
        .pipe(gulp.dest('www/js/'))
});

//Creamos la tarea para el código CSS
gulp.task('minify-css', () => {
    gulp.src('www/css/*.css')
        .pipe(concat('all-min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('www/css/'));
});

//Creamos la tarea para el código HTML
gulp.task('minify-html', function() {
    gulp.src('www/index.html')
        .pipe(concat('index-min.html'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('www'));
});

gulp.task('default', [ 'compress-js' , 'minify-css' , 'minify-html' ]);