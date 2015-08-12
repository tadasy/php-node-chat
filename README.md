# phpとnodeを使った簡易チャット

## 目的

チャットシステムの検証  

* socket.ioでwebsocket
* nodeのクラスタリング(未検証)
    * `pm2` を使ってみる予定
* nodeはbroadcastに特化させたい
* phpは画面と投稿の受付
* php -> nodeは node側に投稿受け付け用のapiでもつくってみる
    * apiをわざわざ作らずに socket.io 1.0から 多言語からemitできることがわかったので、 phpのemitterである [socket.io-php-emitter](https://github.com/rase-/socket.io-php-emitter) でphp -> node の通知を行う

## イメージ
![image](https://dl.dropboxusercontent.com/u/1193948/%E5%86%99%E7%9C%9F%202015-08-12%2016%2041%2000.jpg)

## require

* phpredis PECL
* redisが `localhost:6379` でアクセスできること
