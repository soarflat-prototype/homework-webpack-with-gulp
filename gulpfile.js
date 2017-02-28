var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');

gulp.task('webpack', function() {
  return gulp.src('./src/js/app.js')
    .pipe(webpackStream({
      entry: {
        vendor: ['jquery'],
        app: './src/js/app.js'
      },
      output: {
        filename: '[name].bundle.js'
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
          }
        }),
      ]
    }))
    .pipe(gulp.dest('./public/js/'));
});