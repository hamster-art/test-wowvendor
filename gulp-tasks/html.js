import {path} from './path.js';
import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import webpHTML from 'gulp-xv-webp-html';
import notifier from 'node-notifier';
import plumber from 'gulp-plumber';
import log from 'fancy-log';
import colors from 'ansi-colors';
import sync from 'browser-sync';

export default function html() {
    return gulp
        .src(path.html.src,  {base: 'src/'})
        .pipe(
            plumber({
                errorHandler: function (err) {
                    log.error(colors.red(err.message));
                    /*notifier.notify({
                        title: 'HTML error',
                        message: err.message,
                    });*/
                },
            })
        )
        .pipe(fileInclude())
        .pipe(webpHTML(['.jpg', '.png']))
        .pipe(gulp.dest(path.html.dist))
        .on('end', sync.reload)
}