const fs = require('fs');
const path = require('path');
const snakeScore = require('../../mongo/snakeScore.js');
module.exports = app => {
    class HomeController extends app.Controller {
        async index(ctx) {
            let html = fs.readFileSync(path.join(__dirname, '../', 'public', '/FunSnake.html'));
            ctx.response.type = "text/html";
            ctx.response.body = html;
        }
        async saveForm(ctx) {
            var myDate = new Date();
            let year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
            let month = myDate.getMonth() + 1;       //获取当前月份(0-11,0代表1月)
            let date = myDate.getDate();        //获取当前日(1-31)
            let hours = myDate.getHours();       //获取当前小时数(0-23)
            let mins = myDate.getMinutes();     //获取当前分钟数(0-59)
            let seconds = myDate.getSeconds();     //获取当前秒数(0-59)
            let time = month + '.' + date + ' ' + hours + ':' + mins;
            let snakescore = new snakeScore({
                name: ctx.request.query.name,
                score: ctx.request.query.length,
                time: time,
            })
            snakescore.save((err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res);
                }
            })
            ctx.redirect('/snake');
        }
        async getRank(ctx) {
            let getSnakeScore = function () {
                return new Promise((resolve, reject) => {
                    snakeScore.find().sort({ score: -1 }).exec((err, res) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(res);
                        }
                    })
                })
            }
            let res = await getSnakeScore();
            res = JSON.stringify(res);
            ctx.response.type = "text/plain";
            ctx.response.body = res;
        }

    }
    return HomeController;
};
