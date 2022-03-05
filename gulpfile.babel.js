import gulp from 'gulp';
import deleteFile from 'del';
import { path, dist } from './gulp-tasks/path.js';
import css from './gulp-tasks/css.js';
import html from './gulp-tasks/html.js';
import js from './gulp-tasks/js.js';
import img from './gulp-tasks/img.js';
import fonts from './gulp-tasks/fonts.js';
import { sprite } from './gulp-tasks/sprite.js';
import copy from './gulp-tasks/copy-files.js';
import favicon from './gulp-tasks/favicon.js';
import watch from './gulp-tasks/watch.js';
import serve from './gulp-tasks/serve.js';

const deleteBuild = () => {
  return deleteFile([dist]);
};
exports.deleteBuild = deleteBuild;

const build = gulp.series(deleteBuild, gulp.parallel(html, css, js, img, fonts, sprite, copy, favicon));
exports.build = build;
exports.html = html;

const run = gulp.parallel(gulp.series(build, serve), watch);
exports.run = run;
