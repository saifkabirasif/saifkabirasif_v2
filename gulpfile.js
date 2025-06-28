
import {src,dest,watch,series,parallel} from 'gulp';
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';
import newer from 'gulp-newer';
import changed from 'gulp-changed';
import sharpOptimizeImages from 'gulp-sharp-optimize-images';


export async function minimize_image(){
    
    const imgSrc = 'source_image/images/**/*.{jpg,jpeg,png,gif,svg}';
    const imgDst = 'static/images/';
    
    return src(imgSrc,{encoding: false})
    .pipe(changed('static/images/**',{extension: '.webp'}))
    .pipe(imagemin([
        gifsicle({ interlaced: true }),
        mozjpeg({ quality: 75, progressive: true }),
        optipng({ optimizationLevel: 5 }),
        svgo({
            plugins: [
                {name: 'removeViewBox', active: false},
                {name: 'cleanupIDs',active: false}
            ]
        })
    ]))
    .pipe(
    sharpOptimizeImages({
        webp:{quality: 80, lossless: false, alsoProcessOriginal: false}
    }))
    .pipe(dest(imgDst))
}

export function watchlist(){
    watch('source_image/images/**/*.{jpg,jpeg,png,gif,svg}',minimize_image)
}


export default series(minimize_image,watchlist)

