var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


gulp.task('uncompressed', function() {
    gulp.src(['./notifier.js'])
        .pipe(concat('notifier.js'))
        .pipe(gulp.dest('dist'))
});

gulp.task('compressed', function() {
    gulp.src(['./notifier.js'])
        .pipe(concat('notifier.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['uncompressed', 'compressed']);