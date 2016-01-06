require('babel-core/register');

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const del = require('del');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const changed = require('gulp-changed');
const eslint = require('gulp-eslint');

const SRC_PATH = './src';
const DIST_PATH = './lib';
const TEST_PATH = './test';

gulp.task('default', () => {
  console.log('oi');
});

gulp.task('clean', () => {
  return del([
    `${DIST_PATH}/*.js`
  ]);
});

gulp.task('dev', ['lint', 'build', 'tests', 'watch']);

gulp.task('lint', () => {
  return gulp.src([`${TEST_PATH}/*.js`, `${SRC_PATH}/*.js`])
    .pipe(eslint())
    .pipe(eslint.format());
})

gulp.task('build', ['clean'], () => {
  return gulp.src(`${SRC_PATH}/*.js`)
    // .pipe(sourcemaps.init())
    .pipe(babel()) // babel will read options from .babelrc
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(DIST_PATH));
});

gulp.task('re-build', () => {
  return gulp.src(`${SRC_PATH}/*.js`)
    .pipe(changed(DIST_PATH))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(sourcemaps.init())
    .pipe(babel()) // babel will read options from .babelrc
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(DIST_PATH));
});

// mocha will read options from test/mocha.opts
gulp.task('tests', () => gulp.src([`${TEST_PATH}/*-test.js`], { read: false }).pipe(mocha()));

gulp.task('watch', () => {
  gulp.watch([`${TEST_PATH}/*.js`, `${SRC_PATH}/*.js`], ['tests']);
  gulp.watch([`${SRC_PATH}/*.js`], ['re-build']);
});
