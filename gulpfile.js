var gulp = require('gulp')
var concat = require('gulp-concat')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('js', function() {
    gulp.src(['static/js/**/module.js', 'static/js/**/*/*.js'])
     .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
     .pipe(sourcemaps.write())
     .pipe(gulp.dest('static/dist/js/'))
})


gulp.task('sass', function() {
    gulp.src('./static/sass/project.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest('./static/dist/css'));
});


gulp.task('watch', ['js'], function () {
  gulp.watch('src/**/*.js', ['js'])
})

