const DIST_PATH = "./dist";
const ALL_HTML_PATH = "./src/*.html";
const TABS_JS_PATH = './src/tabs.js';
const INDEX_TABS_JS_PATH = './src/indexTabs.js'
const APP_JS_PATH = 'app.js';
const SRC_INDEX_HTML_PATH = './src/index.html';
const SRC_TABS_SCC_PATH = './src/tabs.css'

const {src, dest, series, parallel, watch} = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');

function startTask(done) {
    browserSync.init({
        server: {
            baseDir: DIST_PATH
        }
    })

    watch(ALL_HTML_PATH, series(copyHtmlTask, reloadWebPage));
    watch([TABS_JS_PATH, INDEX_TABS_JS_PATH], series(copyJsTask, reloadWebPage));
    watch('./src/*.css', series(copyCssTask, reloadWebPage));

    done()
}

function buildTask() {
    return series(cleanDistTask,
        parallel(
            copyHtmlTask,
            copyJsTask,
            copyCssTask
        ));
}

function copyHtmlTask() {
    return src(SRC_INDEX_HTML_PATH).pipe(dest(DIST_PATH))
}

function copyJsTask() {
    return src([
        TABS_JS_PATH,
        INDEX_TABS_JS_PATH
    ]).pipe(sourcemaps.init())
        .pipe(concat(APP_JS_PATH))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(dest(DIST_PATH))
}

function copyCssTask() {
    return src(SRC_TABS_SCC_PATH).pipe(cleanCSS()).pipe(dest(DIST_PATH))
}

function reloadWebPage(done) {
    browserSync.reload();

    done()
}

function cleanDistTask() {
    return src(DIST_PATH, {read: false, allowEmpty: true}).pipe(clean())
}

exports.build = buildTask();
exports.start = series(buildTask(), startTask);

