import {dist} from './path.js';
import sync from 'browser-sync';

export default function serve() {
    sync.init({
        server: {
            baseDir: './' + dist + '/',
        },
        notify: false,
    });
};