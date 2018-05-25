let mysql = require('mysql');
let connection = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'test',
    }
)
let databaseName = 'StuQuery';
let tableName = 'StuInfo';

//构造函数声明对象的时候自动初始化数据库连接
let conDB = function() {
    //初始化数据库连接
    connection.connect();
    connection.query('use ' + databaseName);
}

//插入一条数据,数据的内容为stu对象
conDB.prototype.runInsert = function (stu) {
    let p = new Promise(function (resolve, reject) {

        connection.query('insert into '+tableName+' values ('+"'"+stu.cookie+"'"+','+"'"+stu.MyCookie+"'"+')', function (err, result, fields) {
            if (err) {
                throw err;
                reject('stu对象插入失败');
                return;
            }
            console.log('数据库insert成功')
            resolve();
        })
    })

    return p;
}

//查询一条数据，数据的条件匹配为cookie
conDB.prototype.runQuery = function (stu) {
    let p = new Promise(function (resolve,reject) {

        connection.query('select * from ' + tableName + ' where SchoolCookie=' +"'"+ stu.MyCookie+"'", function (err, results, fields) {
            if (err) {
                throw err;
                reject('查询失败');
                return;
            }
            console.log('数据库query成功');
            resolve(results);
        })
    })

    return p;
}

//更新一条数据，数据匹配的条件为cookie
conDB.prototype.runUpdate = function(stuNew,stuOld){
    let p = new Promise(function(resolve,reject){

        console.log(qqq);
        connection.query('update '+tableName+' set cookie= '+"'"+stuNew.cookie+"'"+' where cookie= '+"'"+stuOld.cookie+"'",function(err,results,fields){
            if(err){
                throw err;
                reject('更改失败');
                return;
            }
            console.log('数据库update成功')
            resolve()
        })
    })

    return p;
}

//删除一条数据，数据匹配的条件为cookie
conDB.prototype.runDelete = function(stu){
    let p = new Promise(function(resolve,reject){
        connection.query('delete from '+tableName+' where cookie= '+"'"+stu.cookie+"'",function(err,result,fields){
            if(err){
                throw err;
                reject('删除失败')
                return;
            }
            console.log('数据库delete成功')
            resolve();
        })
    });

    return p;
}

//查询出全部的数据
conDB.prototype.runQueryAll = function () {
    let p = new Promise(function (resolve,reject) {
        connection.query('select * from ' + tableName , function (err, results, fields) {
            if (err) {
                throw err;
                reject('查询失败');
                return;
            }
            console.log('数据库query成功');
            resolve(results);
        })
    })

    return p;
}


module.exports = conDB;