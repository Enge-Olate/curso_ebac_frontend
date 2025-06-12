const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const obfuscate = require("gulp-obfuscate");
const uglify = require("gulp-uglify");
const image = require("gulp-imagemin");
const source_maps = require('gulp-sourcemaps');

function compilaSass() {
  return gulp
    .src("./src/styles/*.scss")
	.pipe(source_maps.init())
    .pipe(
      sass({ style: "compressed" }, { ignoreInitial: false }).on(
        "error",
        sass.logError
      )
    )
	.pipe(source_maps.write('./maps'))
    .pipe(gulp.dest("./build/styles/"));
}

function javascriptLindo() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/scripts/"));
}

function obfuscateJavascript() {
  return (
    gulp
      .src("./src/scripts/*.js")
      .pipe(obfuscate())
      .pipe(gulp.dest("./build/scripts/")),
    javascriptLindo()
  );
}

function comprimeImagens() {
  return gulp
    .src("./src/imagens/*")
    .pipe(image())
    .pipe(gulp.dest("./build/imagens_min/"));
}

exports.watch = function () {
  gulp.watch("./src/styles/*scss",  gulp.series(compilaSass));
  gulp.watch("./src/scripts/*.js", {ignoreInitial: false}, gulp.series(obfuscateJavascript));
  gulp.watch("./src/imagens/*", {ignoreInitial:false}, gulp.series(comprimeImagens));
};
exports.default = this.watch;
