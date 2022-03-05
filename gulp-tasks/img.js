import {path} from './path.js';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import imageWebp from 'gulp-webp';
import newer from "gulp-newer";
import sync from 'browser-sync';
import plumber from "gulp-plumber";
import log from "fancy-log";
import colors from "ansi-colors";
import notifier from "node-notifier";

export default function img() {
    gulp
        .src(path.assets.src)
        .pipe(gulp.dest(path.assets.dist))
        .on('end', sync.reload);
    return gulp
        .src(path.img.src)
        .pipe(
            plumber({
                errorHandler: function (err) {
                    log.error(colors.red(err.message));
                    notifier.notify({
                        title: 'IMG error',
                        message: err.message,
                    });
                },
            })
        )
        .pipe(
            imagemin([
                imagemin.optipng({optimizationLevel: 5}),
                imagemin.mozjpeg({quality: 75, progressive: true}),
                imagemin.svgo({
                    plugins: [{removeViewBox: true}, {cleanupIDs: false}],
                }),
            ]),
        )
        .pipe(gulp.dest(path.img.dist))
        .pipe(newer(path.img.dist))
        .pipe(imageWebp())
        .pipe(gulp.dest(path.img.dist))
        .on('end', sync.reload);
}
