const path = require('path')
const fs = require('fs')
const url = require('url')
const mime = require('./mime');
let staticDir;

let initStaticServer = function (req, res) {


    //如果请求请求一个静态文件
    if (req.url.startsWith('/file')) {
        staticDir = path.join(__dirname, '../', '/resource')
        let fileName = path.basename(req.url)

        fs.readFile(path.join(staticDir, fileName), (err, data) => {
            //文件读取失败，给出提示
            if (err) {

            }
            //文件读取成功
            else {

                let extName = path.extname(req.url);
                let Ctype = 'text/html';
                if (mime[extName]) {
                    cType = mime[extName];
                }
                if (mime[extName].startsWith('text')) {
                    cType = cType + '; charset=utf-8';
                }
                if (mime[extName].startsWith('image')) {
                }
                res.writeHead(200, {
                    'Content-Type': cType
                })
                res.end(data);
            }
        })
    }
    //如果请求的是一个css文件
    if (req.url.startsWith('/css')) {
        staticDir = path.join(__dirname, '../', '/css')
        let fileName = path.basename(req.url)
        fs.readFile(path.join(staticDir, fileName), (err, data) => {
            //文件读取失败，给出提示
            if (err) {

            }
            //文件读取成功
            else {

                let extName = path.extname(req.url);
                let Ctype = 'text/html';
                if (mime[extName]) {
                    cType = mime[extName];
                }
                if (mime[extName].startsWith('text')) {
                    cType = cType + '; charset=utf-8';
                }
                if (mime[extName].startsWith('image')) {
                }
                res.writeHead(200, {
                    'Content-Type': cType
                })
                res.end(data);
            }
        })
    }
    //如果请求的是一个img文件
    if (req.url.startsWith('/img')) {
        staticDir = path.join(__dirname, '../', '/img')
        let fileName = path.basename(req.url)

        fs.readFile(path.join(staticDir, fileName), (err, data) => {
            //文件读取失败，给出提示
            if (err) {

            }
            //文件读取成功
            else {

                let extName = path.extname(req.url);
                let Ctype = 'text/html';
                if (mime[extName]) {
                    cType = mime[extName];
                }
                if (mime[extName].startsWith('text')) {
                    cType = cType + '; charset=utf-8';
                }
                if (mime[extName].startsWith('image')) {
                }
                res.writeHead(200, {
                    'Content-Type': cType
                })
                res.end(data);
            }
        })
    }
}

module.exports = initStaticServer;