import {path} from './path.js';
import gulp from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';

export default function fonts() {
    gulp.src(path.fonts.src).pipe(ttf2woff()).pipe(gulp.dest(path.fonts.dist));
    return gulp.src(path.fonts.src).pipe(ttf2woff2()).pipe(gulp.dest(path.fonts.dist));
}