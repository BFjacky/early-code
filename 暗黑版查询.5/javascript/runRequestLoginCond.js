/*
    请求得到一个 cookie 和 验证码 
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

const options = {
    hostname: '202.118.167.86',
    port: 9001,
    path: '/',
    method: 'get',
}

module.exports = function runRequestLoginCond(stu) {
    let p = new Promise(function (resolve, reject) {
        //请求登录页面
        const req = http.request(options, (res) => {
            //获得cookie
            const cookie = res.headers['set-cookie'][0].split(';')[0];
            stu.setCookie(cookie);
            const imageOptions = {
                hostname: '202.118.167.86',
                port: 9001,
                path: '/validateCodeAction.do',
                method: 'get',
                headers: {
                    Cookie: cookie,
                }
            };

            //请求与该cookie 绑定的 captcha
            const imageReq = http.request(imageOptions, (imageRes) => {
                imageRes.on('data', (chunk) => {
                    fs.writeFileSync(path.join(__dirname, '../', 'resource', '/captcha.jpg'), chunk);
                });
                imageRes.on('end', () => {
                    resolve('nothing');
                });
            });
            imageReq.end();
        });
        req.end();
    })
    return p;
}