// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyes');
let htmlmin = require('gulp-htmlmin');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var del = require('del');
var wrap = require('gulp-wrap');

gulp.task('clean', function () {
  return del(['dist','build']);
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Generate css from scss 
gulp.task('sass', function() {
  return gulp.src("src/**/*.scss")
    .pipe(concat('merged.scss'))
    .pipe(gulp.dest("build/scss"))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('merged.scss.css'))
    .pipe(gulp.dest("build/css"));
});

gulp.task('css', gulp.series('sass', function(){
    return gulp.src(['src/**/*.css','build/css/*.css'])
	.pipe(concat('woodlands.css'))
	.pipe(gulp.dest('build'))
    .pipe(rename('woodlands.min.css'))
	.pipe(cssnano())
    .pipe(gulp.dest('build'));
}));

// Concatenate & Minify JS
gulp.task('js', function() {
    return gulp.src('src/**/*.js')
        .pipe(concat('woodlands.js'))
        .pipe(gulp.dest('build'))
        .pipe(rename('woodlands.min.js'))
        .pipe(uglify({mangle: false, ecma: 6}))
        .pipe(gulp.dest('build'));
});

// Concatenate Html snippets for adding to Footer before </body> tag 
gulp.task('html', function() {
    return gulp.src('src/**/*.html')
	.pipe(concat('Footer_Content.txt'))
	/* .pipe(htmlmin({collapseWhitespace: true})) */
	.pipe(gulp.dest('dist'));
});

gulp.task('tag-css', gulp.series('css', function() {
    return gulp.src('build/woodlands.min.css')
	.pipe(wrap('<style><%= contents %></style>'))
	.pipe(rename('woodlands.min.css.tag'))
	.pipe(gulp.dest('build/tag'));	
}));

gulp.task('tag-js', gulp.series('js', function() {
    return gulp.src('build/woodlands.min.js')
        .pipe(wrap('<script><%= contents %></script>')) 
        .pipe(rename('woodlands.min.js.tag'))
        .pipe(gulp.dest('build/tag'));
}));

gulp.task('header', gulp.series('tag-css','tag-js', function() {
    return gulp.src(['src/external-scripts.txt','build/tag/*.tag'])
	.pipe(concat('Additional_Header_Content.txt'))
	.pipe(gulp.dest('dist'));

}));

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.js', gulp.series('lint', 'scripts'));
    gulp.watch(['src/**/*.css','src/**/*.scss'], gulp.series('css'));
    gulp.watch('src/**/*.html', gulp.series('html'));
});

// Default Task
gulp.task('default', gulp.series('clean', /*'lint', */gulp.parallel('header', 'html')));

