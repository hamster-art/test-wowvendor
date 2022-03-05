import {path} from './path.js';
import gulp from 'gulp';
import notifier from 'node-notifier';
import plumber from 'gulp-plumber';
import log from 'fancy-log';
import colors from 'ansi-colors';
import favicons from "gulp-favicons";


export default function favicon() {
    return gulp.src(path.favicons.src)
        .pipe(
            plumber({
                errorHandler: function (err) {
                    log.error(colors.red(err.message));
                    notifier.notify({
                        title: 'Favicon error',
                        message: err.message,
                    });
                },
            })
        )
        .pipe(favicons({
            icons: {
                appleIcon: false,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        .pipe(gulp.dest(path.favicons.build));
}