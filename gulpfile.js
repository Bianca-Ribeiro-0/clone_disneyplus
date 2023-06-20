const gulp = require('gulp');    //Iniciando pacote gulp, sass, e compressor de imgs
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/css'));
}

function styles(){
    return gulp.src('./src/styles/*scss')   //Função da estilização do projeto, comprimindo e destino para pasta dist
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images(){
    return gulp.src('./src/images/**/*')  
        .pipe(imagemin())                   //Função do compressor de imgs
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images, scripts);        //Padrão gulp, definindo a função watch para observar os eventos em paralelo
exports.watch = function(){
    gulp.watch('./src/styles/*scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}