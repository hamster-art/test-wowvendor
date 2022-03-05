import {path} from './path.js';
import gulp from 'gulp';
import sync from 'browser-sync';
import plumber from "gulp-plumber";
import log from "fancy-log";
import colors from "ansi-colors";
import notifier from "node-notifier";
import jsUglify from 'gulp-uglify-es';
import webpack from 'webpack-stream';
import rename from 'gulp-rename';

export default function js() {
    return gulp
        .src(path.js.src)
        .pipe(
            plumber({
                errorHandler: function (err) {
                    log.error(colors.red(err.message));
                    notifier.notify({
                        title: 'JS error',
                        message: err.message,
                    });
                },
            })
        )
        .pipe(webpack(require('../webpack.config.js')))
        .pipe(gulp.dest(path.js.dist))
        .pipe(jsUglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest(path.js.dist))
        .on('end', sync.reload);
}
