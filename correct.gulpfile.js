var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');

gulp.task('webpack', function() {
  return gulp.src('./src/js/app.js')
    .pipe(webpackStream({
      entry: {
        vendor: ['jquery', 'velocity-animate'],
        app: './src/js/app.js',
      },
      output: {
        filename: '[name].bundle.js',
      },
      plugins: [
        // 複数のエントリポイント間での共通モジュールで構成されるファイルを生成する
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        // 指定したモジュールをすべてのファイル（モジュール）の変数として利用可能にする
        new webpack.ProvidePlugin({
          $: 'jquery',
          velocity: 'velocity-animate',
        }),
        // 圧縮に関する設定
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
          }
        }),
      ]
    }))
    .pipe(gulp.dest('./public/js/'));
});