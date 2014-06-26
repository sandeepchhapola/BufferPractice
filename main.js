/*
/   before running base64ToMp3, run mp3ToBase64 first.
*/
var mp3ToBase64=require("./module/mp3ToBase64.js");
var base64ToMp3=require("./module/base64ToMp3.js");

mp3ToBase64('/home/sandeepchhapola/Desktop/files/01-Back2Love-RabJaane.mp3','/home/sandeepchhapola/Desktop/files/Mp3ToBase64/01-Back2Love-RabJaane_(1).b64');

//base64ToMp3('/home/sandeepchhapola/Desktop/files/Mp3ToBase64/01-Back2Love-RabJaane_(1).b64','/home/sandeepchhapola/Desktop/files/Base64toMp3/01-Back2Love-RabJaane.mp3');
