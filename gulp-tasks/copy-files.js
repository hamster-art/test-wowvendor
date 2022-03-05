import {path, src} from './path.js';
import gulp from 'gulp';
import sync from 'browser-sync';

export default function copy() {
    return  gulp.src(path.files.src, {allowEmpty: true})
        .pipe(gulp.dest(path.files.dist))
        .on('end', sync.reload);
};