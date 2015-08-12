<?php
require __DIR__ . '/vendor/autoload.php';

$app = new \Slim\Slim();
$app->get('/', function(){
    require __DIR__ . '/index.html';
});
$app->get('/chat/:message', function($message){
    $redis = new \Redis();
    $redis->connect('127.0.0.1', '6379');
    $emitter = new SocketIO\Emitter($redis);
    $emitter->emit('chat_message', $message);
    echo "message: " . $message;
});

$app->run();
