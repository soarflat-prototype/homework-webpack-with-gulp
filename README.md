# homework-webpack-with-gulp
gulpでwebpackの利用できるようになるための課題

## 課題内容
現状の`gulpfile.js`の設定だと、バンドルされたファイルがブラウザ上で正常に動作しません。
正常に動作するように`gulpfile.js`を修正してください。

###　正常な動作

## ヒント

### `velocity-animate`
ブラウザのエラーを確認すると`velocity`が存在しないことがわかります。
npmで`velocity-animate`をローカルインストールし、`jquery`とバンドルされたファイル（`vendor.bundle.js`）が出力されるように`gulpfile.js`に記述を追加してください。

### `ProvidePlugin`
無事に`jquery`と`velocity-animate`をバンドルしたファイルを出力できても、まだ`velocity`が存在しないエラーが出力されるはずです。
webpackのプラグインである、`ProvidePlugin`を利用して、エラーが出力されないように`gulpfile.js`に記述を追加してください。

`ProvidePlugin`に関して知りたい方は以下の記事をご覧ください。
[ProvidePlugin](http://qiita.com/soarflat/items/28bf799f7e0335b68186#provideplugin)

### `CommonsChunkPlugin`
上記を対応すれば、`jquery`と`velocity-animate`をバンドルしたファイルを出力でき、ブラウザでも正常に動作したと思います。
しかし出力されるファイルに無駄があるため、webpackのプラグインである`CommonsChunkPlugin`を利用して`vendor.bundle.js`を出力してください。

`CommonsChunkPlugin`に関して知りたい方は以下の記事をご覧ください。
[CommonsChunkPlugin](https://webpack.js.org/plugins/commons-chunk-plugin/)

## 解答
解答は`correct.gulpfile.js`に記載しております。