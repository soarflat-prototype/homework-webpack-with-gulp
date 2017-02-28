# homework-webpack-with-gulp
gulpでwebpackの利用できるようになるための課題

## 課題内容
現状の`gulpfile.js`の設定だと、バンドルされたファイルがブラウザ上で正常に動作しません。正常に動作するように`gulpfile.js`を修正してください。

`app.js`や`modules`配下のJavaScriptファイルの修正は不要です。

### 現状の動作
![incorrect](https://cloud.githubusercontent.com/assets/3727873/23396258/5461c00e-fdd6-11e6-963a-493fc0458ecb.jpg)

1080は出力されていますが、エラーが出力されており処理が止まっています。

### 期待する正常な動作
![correct](https://cloud.githubusercontent.com/assets/3727873/23396259/5464bfd4-fdd6-11e6-928a-cd28ad0a9c5a.gif)

1080が出力され、ページを開いた際のフェードアニメーションも動作します。

## ヒント

### `velocity-animate`
ブラウザのエラーを確認すると`velocity`が存在しないことがわかります。npmで`velocity-animate`をローカルインストールし、`jquery`とバンドルされたファイル（`vendor.bundle.js`）が出力されるように`gulpfile.js`に記述を追加してください。

### `ProvidePlugin`
無事に`jquery`と`velocity-animate`をバンドルしたファイルを出力できても、まだ`velocity`が存在しないエラーが出力されるはずです。webpackのプラグインである、`ProvidePlugin`を利用して、エラーが出力されないように`gulpfile.js`に記述を追加してください。

`ProvidePlugin`に関して知りたい方は[こちらの記事](http://qiita.com/soarflat/items/28bf799f7e0335b68186#provideplugin)をご覧ください。

### `CommonsChunkPlugin`
上記を対応すれば、`jquery`と`velocity-animate`をバンドルしたファイルを出力でき、ブラウザでも正常に動作したと思います。しかし出力されるファイルに無駄があるため、webpackのプラグインである`CommonsChunkPlugin`を利用して`vendor.bundle.js`を出力してください。

`CommonsChunkPlugin`に関して知りたい方は[こちらの記事](https://webpack.js.org/plugins/commons-chunk-plugin/)をご覧ください。

## 解答
解答は`correct.gulpfile.js`に記載しております。