const myconDB = require('../mysqlServer/myMysql.js')
const Student = require('../javascript/Student.js');
const cookieCheck = require('../javascript/CookieCheck.js');
//初始化一个数据库连接
let conDB = new myconDB();
let OKcookie = '';
module.exports = function (req, res, newSchoolCookie) {

    let p = new Promise(function (resolve, reject) {
        // 拿到cookie字符串
        let key = req.headers['cookie']
        console.log('first： 检查是否得到cookie', key);
        //如果该cookie字符串为空
        if (!key) {
            //失败
            console.log('second： key为空')
            runSetCookie(req, res, newSchoolCookie).then(
                function (data) {
                    resolve(data);
                }
            )
        }

        let stu = new Student();
        stu.setMyCookie(key);

        conDB.runQuery(stu).then(
            function (data) {
                if (data.length === 0) {
                    console.log('second: 数据库查询结果为空');
                    return Promise.reject('no')
                }
                else {
                    console.log('second: 数据库询到了结果：', data)
                    return Promise.resolve(data);
                }
            }
        ).then(
            function (data) {
                //判断data中是否有合法的
                let dataStr = JSON.stringify(data);
                let results = JSON.parse(dataStr);
                console.log('third: 这是data[0]cookie', results[0].cookie)
                let SchoolCookie = results[0].cookie
                cookieCheck(results[0].cookie).then(
                    function (data) {
                        if (data === -1) {
                            //失败
                            console.log('forth: 拿到的SchoolCookie无效')
                            runSetCookie(req, res, newSchoolCookie).then(
                                function (data) {
                                    resolve(data);
                                }
                            )
                        }
                        else {
                            console.log('forth: 拿到的SchoolCookie有效')
                            resolve(SchoolCookie)
                        }
                    }
                )
            },
            function (reason, data) {
                //  失败
                console.log('third: 返回空字符串');
                runSetCookie(req, res, newSchoolCookie).then(
                    function (data) {
                        resolve(data);
                    }
                )
            }
            )
    })
    return p;
}



















function runSetCookie(req, res, newSchoolCookie) {
    let p = new Promise(function (resolve, reject) {
        console.log('返回了空字符串')
        let randomStr = 'feisweb=' + Math.random().toString(36).substring(2, 20);
        let stu = new Student();
        stu.setCookie(newSchoolCookie);
        stu.setMyCookie(randomStr);
        conDB.runInsert(stu).then(
            function (data) {
                res.setHeader('Set-Cookie', [randomStr]);
                //因为是重设的新的cookie，所以没有得到有效的cookie，则回复一个空字符串
                resolve('');
            }
        );
    })

    return p;
}
