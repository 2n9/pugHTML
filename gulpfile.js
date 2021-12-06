var gulp = require('gulp');
var pug = require('gulp-pug');
var webserver = require('gulp-webserver');

gulp.task( 'pug', function() {
    return gulp
        .src([ 'src/**/*.pug', '!src/**/_*.pug' ])
        .pipe(pug({
            pretty: true
        }))
        .pipe( gulp.dest( './server' ) );
});

gulp.task('web', function() {
    return gulp
        .src('server')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
})