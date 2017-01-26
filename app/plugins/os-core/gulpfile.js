var prefixerConfig = {
    browsers: ['last 10 versions']
};

var sassConfig = {
    onError: console.error.bind(console, 'SASS Error:'),
    removeComments: true
};

function on_error(err){
    console.log(err);
    this.emit("end");
}



var gulp = require('gulp');
var sass = require('gulp-sass');
var count =     require('gulp-count');
var prefixer =  require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

gulp.task('default', function(){

    gulp.src(['assets/scss/**/*.scss'])
        .pipe(sass(sassConfig).on('error', sass.logError))
        .pipe(prefixer(prefixerConfig))
        .pipe(count())
        .pipe(gulp.dest('assets/css/')).on('error',on_error);


});

gulp.task('run', function(){



    gulp.watch(['assets/scss/**/*.scss'], ['default']);

    gulp.watch(['assets/scss/**/*.scss','**/*.html'])
        .on('change', function(event){
            
        }).on('error',on_error);

});