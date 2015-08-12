# phpとnodeを使った簡易チャット

# 目的

チャットシステムの検証  

* socket.ioでwebsocket
* nodeのクラスタリング(未検証)
    * pm2を使って見る予定
* nodeはbroadcastに特化させたい
* phpは画面と投稿の受付
* php -> nodeは node側に投稿受け付け用のapiでもつくってみる
    * apiをわざわざ作らずに socket.io 1.0から 多言語からemitできることがわかったので、 phpのemitterである `socket.io-php-emitter` でphp -> node の通知を行う

## require

* phpredis PECL
* redisが `localhost:6379` でアクセスできること
