
//Fast you need to install cryptoJs using npm install crypto-js

var CryptoJS = require("crypto-js");
const key = 'my-secret-key@123';
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify("Suresh@111"), key).toString();
console.log(ciphertext,"encrypt data")

var bytes = CryptoJS.AES.decrypt(ciphertext,key);
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
console.log(decryptedData,'bytes');
