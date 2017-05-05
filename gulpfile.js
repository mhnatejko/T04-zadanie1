var gulp = require("gulp");
var plumber = require("gulp-plumber");
var uglify = require("gulp-uglify");
var useref = require("gulp-useref");
var browserSync = require("browser-sync");
var del = require("del");

gulp.task("test", function(){
    console.log("sukces");
});

gulp.task("server", function() {

    browserSync.init({
        server: "src/"
    });

});

gulp.task("watch", function(){
    gulp.watch(('src/js/*.js'), browserSync.reload) ;
});

gulp.task("clean", function() {

    return del("dist/");

});


gulp.task('uglify', function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(useref())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('copy', function() {

    return gulp.src(['src/css/*.css'], {
        base: "src"
    })
    .pipe(gulp.dest("dist/css"));

});

gulp.task("build:server", ["build"], function() {

    browserSync.init({
        server: "dist/"
    });

});

gulp.task("build", function(cb) {

    runSequence("clean", "uglify", "copy", cb);

});