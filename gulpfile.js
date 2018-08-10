var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
// Other requires...
/*var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');*/

var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

// Set the browser that you want to support
/*var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];*/

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

/*// Gulp task to minify CSS files
gulp.task('styles', function () {
  return gulp.src('app/css/style.css')
  // Auto-prefix css styles for cross browser compatibility
      .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
      // Minify the file
      .pipe(csso())
      // Output
      .pipe(gulp.dest('dist/css'))
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src('app/js/!*.js')
  // Minify the file
      .pipe(uglify())
      // Output
      .pipe(gulp.dest('dist/js'))
});

// Gulp task to minify HTML files
gulp.task('pages', function() {
  return gulp.src(['app/!*.html'])
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(gulp.dest('dist'));
});*/

// multiple file js into single file
gulp.task('pack-js', function () {
  return gulp.src(['app/js/main.js', 'app/js/module-*.js'])
      .pipe(concat('bundle.js'))
      .pipe(minify())
      .pipe(gulp.dest('dist/js'));
});

// multiple file css into single file
gulp.task('pack-css', function () {
  return gulp.src(['app/css/main.css', 'app/css/custom.css'])
      .pipe(concat('stylesheet.css'))
      .pipe(cleanCss())
      .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['pack-js', 'pack-css']);