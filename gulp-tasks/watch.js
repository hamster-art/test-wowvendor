import gulp from 'gulp';
import {path} from './path.js';
import html from './html.js'
import css from './css.js'
import js from './js.js'
import img from './img.js'
import {sprite} from './sprite.js'

export default function watch() {
    gulp.watch(path.html.watch, html);
    gulp.watch(path.css.watch, css);
    gulp.watch(path.icons.watch, sprite);
    gulp.watch(path.js.watch, js);
    gulp.watch(path.img.watch, img);
};