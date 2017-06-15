var gulp        = require('gulp'),
    connect     = require('gulp-connect'),
    webpack     = require('webpack-stream'),
    minify      = require('gulp-minify'),
    cleanCss    = require('gulp-clean-css');

//gulp.task('html', function () {
//    return gulp.src('views/*.html')
//        .pipe(connect.reload());
//});
//
//gulp.task('css', function () {
//    return gulp.src('css/*.css')
//        .pipe(connect.reload());
//});
//
//gulp.task('js', function () {
//    return gulp.src('js/section/**/*.js')
//        .pipe(connect.reload());
//});
//
//gulp.task('json', function () {
//    return gulp.src('ownGeo/*.json')
//        .pipe(connect.reload());
//});
//
//gulp.task('watch', function () {
//    gulp.watch(['views/*.html'], ['html']);
//    gulp.watch(['ownGeo/*.json'], ['json']);
//    gulp.watch(['css/*.css'], ['webpack', 'css']);
//    gulp.watch(['js/section/**/*.js'], ['webpack', 'js']);
//});
//
//gulp.task('webserver', function () {
//    connect.server({
//        port: 9999,
//        root: './',
//        livereload: true
//    });
//});
//
//gulp.task('webpack', function () {
//    //return gulp.src('./entry.js')
//    //    .pipe(webpack(require('./webpack.config.js')))
//    //    .pipe(gulp.dest('./dist'))
//    //    .pipe(connect.reload());
//});
//
//gulp.task('default', ['webserver', 'html', 'watch', 'webpack'], function () {
//
//});

// var config = {
//  html: {
//       block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
//       detect: {
//         js: /<script.*src=['"]([^'"]+)/gi,
//         css: /<link.*href=['"]([^'"]+)/gi
//       },
//       replace: {
//         js: '<script src="{{filePath}}"></script>',
//         css: '<link rel="stylesheet" href="{{filePath}}" />'
//       }
//     }
// };

// gulp.task('default', function () {
//     return gulp.src('*.html')
//     	//.pipe(plugin.concat('all.js'))
//     	//.pipe(plugin.uglify())
//         //.pipe(plugin.useref({noconcat:true,additionalStreames:[gulp.src('src/js/*.js').pipe(plugin.uglify())]}))
//         //.pipe(gulpif('*.js', uglify()))
//         //.pipe(gulpif('*.css', minifyCss()))
//         .pipe(wiredep({
//         	optional:config,
//         	goes:'here'
//         }))
//         .pipe(gulp.dest('dist/'));
// });

gulp.task('index', function () {
    return gulp.src('/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', function () {
    return gulp.src('views/*.html')
        .pipe(gulp.dest('./dist/views'));
});

gulp.task('css', function () {
    return gulp.src('css/*.css')
        .pipe(cleanCSS())
        .pipe(connect.reload());
});

gulp.task('js', function () {
    return gulp.src('js/section/**/*.js')
        .pipe(minify())
        .pipe(gulp.dest('./dist/js/section/'));
});

gulp.task('svg', function () {
    return gulp.src('xml/*.svg')
        .pipe(gulp.dest('./dist/xml'));
});

gulp.task('default', ['index']);