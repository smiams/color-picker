var gulp = require('gulp');
var del = require('del');
var haml = require('gulp-ruby-haml');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');

gulp.task('clean', function () {
  return del('./build/**/*');
});

gulp.task('haml', ['clean'], function() {
  gulp.src('./app/haml/**/*.haml')
  .pipe(haml())
  .pipe(gulp.dest('./build/html'));
  gulp.src('./app/index.haml')
  .pipe(haml())
  .pipe(gulp.dest('./build'));
});

gulp.task('sass', ['clean'], function() {
  return sass('./app/scss/**/*.scss', {emitCompileError: true})
  .pipe(gulp.dest('./build/css'));
});

gulp.task('js', ['clean'], function() {
  gulp.src('./app/js/**/*.js')
  .pipe(gulp.dest('./build/js'));
});

gulp.task('bower', ['clean'], function() {
  gulp.src('./bower_components/angular/angular.min.js')
  .pipe(gulp.dest('./build/js'));

  gulp.src('./bower_components/angular-route/angular-route.min.js')
  .pipe(gulp.dest('./build/js'));

  gulp.src('./bower_components/jquery/dist/jquery.min.js')
  .pipe(gulp.dest('./build/js'));
});

gulp.task('server', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('default', ['haml', 'sass', 'js', 'bower', 'server']);

gulp.watch('app/**/*', ['haml', 'sass', 'js', 'bower']);

gulp.watch('app/**/*', function(event) {
  console.log('> > > ' + event.path + ' ' + event.type);
});