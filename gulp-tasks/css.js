import {path} from './path.js';
import gulp from 'gulp';
import notifier from 'node-notifier';
import plumber from 'gulp-plumber';
import log from 'fancy-log';
import colors from 'ansi-colors';
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
import scssGroupMedia from 'gulp-group-css-media-queries';
import scssAutoprefixer from 'gulp-autoprefixer';
import sourcemap from 'gulp-sourcemaps';
import scssCleanMin from 'gulp-clean-css';
import rename from 'gulp-rename';
import webpCss from 'gulp-webp-css';
import sync from 'browser-sync';

const scss = gulpSass(nodeSass);

export default function css() {
    return gulp
        .src(path.css.src)
        .pipe(
            plumber({
                errorHandler: function (err) {
                    log.error(colors.red(err.message));
                    notifier.notify({
                        title: 'CSS error',
                        message: err.message,
                    });
                },
            })
        )
        .pipe(sourcemap.init())
        .pipe(scss())
        .pipe(scssGroupMedia())
        .pipe(scssAutoprefixer())
        .pipe(webpCss())
        .pipe(gulp.dest(path.css.dist))
        .pipe(scssCleanMin())
        .pipe(rename({extname: '.min.css'}))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest(path.css.dist))
        .on('end', sync.reload);
}