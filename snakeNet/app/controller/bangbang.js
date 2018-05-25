const fs = require('fs');
const path = require('path');
const bangRoom = require('../../mongo/bangRoom.js');
const devRoom = 'test';
module.exports = app => {
    class HomeController extends app.Controller {
        async index(ctx) {
            let html = fs.readFileSync(path.join(__dirname, '../', 'public', '/bangbang.html'));
            ctx.response.type = "text/html";
            ctx.response.body = html;
        }
        async init() {
            let updateStr = {
                roomName: devRoom,
                nowVal: 0,
                nowPlayer: 'cyf',
                sumPlayer: 1,
            };
            let whereStr = { roomName: devRoom };
            let conds = { upsert: true, multi: true }
            bangRoom.update(whereStr, updateStr, conds, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('成功初始化房间:' + res.roomName);
                }
            })
        }
        async add(ctx) {
            console.log('接收到了加值请求');
            console.log(ctx.request.query['value']);
            let addValue = ctx.request.query['value'];
            addValue = parseFloat(addValue);

            let updateNewVal = function () {
                return new Promise((resolve, reject) => {
                    bangRoom.find({ roomName: devRoom }, (err, res) => {
                        if (err) {
                            console.log(err);
                            reject(err);
                        }
                        else {
                            resolve(res[0].nowVal + addValue);
                        }
                    })
                })
            }

            let newNowVal = await updateNewVal();
            let res = { 'newNowVal': newNowVal };
            res = JSON.stringify(res);

            let updateStr = {
                roomName: devRoom,
                nowVal: newNowVal,
                nowPlayer: 'cyf',
                sumPlayer: 1,
            };
            let whereStr = { roomName: devRoom };
            let conds = { upsert: true, multi: true };

            bangRoom.update(whereStr, updateStr, conds, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('成功更新的房间的value:', updateStr.roomName);
                }
            });

            ctx.response.type = "text/plain";
            ctx.response.body = res;
        }
        async updateTimely(ctx) {
            let getNewVal = function () {
                return new Promise((resolve, reject) => {
                    bangRoom.find({ 'roomName': devRoom }, (err, res) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(res[0].nowVal);
                        }
                    })
                })
            }
            let newNowVal = await getNewVal();
            let res = { 'newNowVal': newNowVal };

            ctx.response.type = "text/plain";
            ctx.response.body = res;
        }
    }
    return HomeController;
};
