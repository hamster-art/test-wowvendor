import {path, src} from './path.js';
import gulp from 'gulp';
import notifier from 'node-notifier';
import plumber from 'gulp-plumber';
import log from 'fancy-log';
import colors from 'ansi-colors';
import sync from 'browser-sync';
import svgSprite from 'gulp-svg-sprite';
import rename from 'gulp-rename';
import clean from 'gulp-clean';

function makeSprite() {
    return gulp
        .src(path.icons.src)
        .pipe(
            plumber({
                errorHandler: function (err) {
                    log.error(colors.red(err.message));
                    notifier.notify({
                        title: 'SVG error',
                        message: err.message,
                    });
                },
            })
        )
        .pipe(
            svgSprite({
                mode: {
                    symbol: true,
                },
            }),
        )
        .pipe(gulp.dest(src + '/styles/'));
}

function moveSprite() {
    gulp
        .src(src + '/styles/symbol/svg/sprite.symbol.svg', {allowEmpty: true})
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest(path.icons.dist));
    return gulp.src('src/styles/symbol/', {read: false, allowEmpty: true}).pipe(clean()).on('end', sync.reload);
}

export const sprite = gulp.series(makeSprite, moveSprite);