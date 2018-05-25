let Student = require('../javascript/Student.js')
let MyconDB = require('./myMysql.js')

let conDB = new MyconDB();

let newStu = new Student('asd','adsfa');
newStu.setCookie('123123123asdddddddd');
conDB.runInsert(newStu).then(
    function(data){
        console.log(data);
    }
)