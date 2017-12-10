const crypto = require('crypto');

/**
 * 加密方法
 * @param key 加密key
 * @param iv       向量
 * @param data     需要加密的数据
 * @returns string
 */
const key = '751f621ea5c8f930';
const iv = '2624750004598718';

exports.encrypt = encrypt = function (data) {
    data = typeof data === 'object' ? JSON.stringify(data) : data;
    const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    let crypted = cipher.update(data, 'utf8', 'binary');
    crypted += cipher.final('binary');
    crypted = new Buffer(crypted, 'binary').toString('base64');
    return crypted;
};

/**000000
 * 解密方法
 * @param key      解密的key
 * @param iv       向量
 * @param crypted  密文
 * @returns string
 */
exports.decrypt = decrypt = function (crypted) {
    crypted = new Buffer(crypted, 'base64').toString('binary');
    const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    let decoded = decipher.update(crypted, 'binary', 'utf8');
    decoded += decipher.final('utf8');
    return decoded;
};

// console.log('加密的key:', key.toString('hex'));
// console.log('加密的iv:', iv);
// const data = JSON.stringify({user: "李业辉", passWord: "520huihui"});
// console.log("需要加密的数据:", data);
// const crypted = encrypt(key, iv, data);
// console.log("数据加密后:", crypted);
// const dec = decrypt(key, iv, crypted);
// console.log("数据解密后:", dec);