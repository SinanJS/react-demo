var gulp = require('gulp');
var babel = require('gulp-babel');
gulp.task('jsx', function() {
    gulp.src("src/**/*.jsx")
        .pipe(babel({
            presets: ['react','es2015']
        }))
    .pipe(gulp.dest("src"));
});
gulp.task("default",['jsx'],function(){
    gulp.watch('src/**/*.jsx',function(){
       gulp.start(['jsx']);
    });
});