export const src = 'src';
export const dist = 'dist';

export const path = {
    html: {
        src: [src + '/*.html', src + '/projects/*.html'],
        dist: dist,
        watch: [src + '/*.html', src + '/components/**/*.html', src + '/projects/*.html']
    },
    css: {
        src: src + '/styles/scss/styles.scss',
        dist: dist + '/styles/',
        watch: [src + '/styles/scss/**/*.scss', src + '/components/**/*.scss']
    },
    js: {
        src: src + '/js/*.js',
        dist: dist + '/js/',
        watch: [src + '/js/**/*.js'],
    },
    img: {
        src: src + '/assets/**/*.{png,jpg,jpeg,svg}',
        dist: dist + '/assets/',
        watch: [src + '/assets/**/*'],
    },
    assets: {
        src: src + '/assets/**/*.{gif,webm,pdf}',
        dist: dist + '/assets/',
        watch: [src + '/assets/**/*'],
    },
    fonts: {
        src: src + '/styles/fonts/*.ttf',
        dist: dist + '/styles/fonts/',
    },
    icons: {
        src: src + '/styles/icons/*.svg',
        dist: dist + '/styles/icons/',
        watch: [src + '/styles/icons/*.svg'],
    },
    favicons: {
        src: 'favicon.svg',
        build: dist + '/'
    },
    files: {
        src: ['sitemap.xml', '*.txt'],
        dist: dist + '/'
    }
}