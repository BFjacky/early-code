
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const http = require('http');
const getScoreFromData = require('./getScoreFromData');
var iconv = require('iconv-lite');
const options = {
    hostname: '202.118.167.86',
    port: 9001,
    path: '/gradeLnAllAction.do?type=ln&oper=qbinfo&lnxndm=2016-2017å­¦å¹´æ¥(ä¸¤å­¦æ)',
    method: 'GET',
    headers: {

        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN',
        'Host': '202.118.167.86:9001',
        'Referer': 'http://202.118.167.86:9001/gradeLnAllAction.do?type=ln&oper=qb',
        'Cookie': ''
    }
};

//请求成绩页面的html 文件内容
module.exports = function getScore(obj) {
    let p = new Promise(function (resolve, reject) {
        options.headers.Cookie = obj.cookie;
        const req = http.request(options, (res) => {
            var chunks = [];
            let size = 0;
            res.on('data', (chunk) => {
                chunks.push(chunk);
                size += chunk.length;
            });
            res.on('end', () => {
                data = new Buffer(size);
                data = Buffer.concat(chunks, size);
                //将获得的字符串解码成utf8
                let decodeHtmlData = iconv.decode(data, 'gbk');
                fs.writeFileSync(path.join(__dirname,'/haha.html'),decodeHtmlData);
                //获得成绩数据
                let score=getScoreFromData(decodeHtmlData);
           
                //执行完了之后，执行resolve
                resolve(score)
            });
        });

        req.on('error', (e) => {
            console.error(`请求遇到问题: ${e.message}`);
            reject(reason,'nothing');
        });
        req.end();
    })

    return p;
}