const gulp = require('gulp');
const sass = require('gulp-sass')( require('sass'));
const obfuscate = require('gulp-obfuscate');
const uglify = require('gulp-uglify');
const image = require('gulp-imagemin');


function compilaSass(){
	return gulp.src('./src/styles/*.scss')
	.pipe(sass({style: 'compressed'},{ignoreInitial: false}).on('error', sass.logError))
	.pipe(gulp.dest('./build/styles/'))
};

function javascriptLindo(){
	return gulp.src('./src/scripts/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./build/scripts/')) 
}

function obfuscateJavascript(){
	return gulp.src('./src/scripts/*.js')
	.pipe(obfuscate())
	.pipe(gulp.dest('./build/scripts/')),
	javascriptLindo();
};

function comprimeImagens(){
	return gulp.src('./src/imagens/*')
	.pipe(image())
	.pipe(gulp.dest('./build/imagens/'))
}

exports.watch = function (){
	gulp.watch('./src/styles/*scss', compilaSass);
	gulp.watch('./src/scripts/*.js', obfuscateJavascript);
	gulp.watch('./src/imagens/*', comprimeImagens);
}
exports.default = this.watch;