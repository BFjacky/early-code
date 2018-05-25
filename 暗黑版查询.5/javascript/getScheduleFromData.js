const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');




module.exports = function getScheduleFromData(data) {
    //该数组用来存放，很多个Schema对象
    let objs = [];
    //该数组用来暂时存放数据
    let datas = [];
    //datas 的下标
    let index = 0;
    //objs 的下标;
    let objsIndex = -1;
    //对象内CourseUnits 的下标
    let UnitsIndex = 0;
    //
    let PrevSchema;
    //将读到的字符串解析为 html 文件格式
    const $ = cheerio.load(data);
    //新的一门课程则为1；
    let flag = 0;

    $('.odd').each(function (i, elem) {

        //新的一门课程
        if ($(this).children('td').length == 18) {
            flag = 1;
            $(this).children('td').each(function (j, elem) {
                switch (j) {
                    case 2: datas[index] = $(this).text().trim(); index++; break;  //课程名 0
                    case 7: datas[index] = $(this).text().trim(); index++; break;  //老师 1
                    case 11: datas[index] = $(this).text().trim(); index++; break;  //周次 2
                    case 12: datas[index] = $(this).text().trim(); index++; break;  //星期 3
                    case 13: datas[index] = $(this).text().trim(); index++; break;  //节次 4
                    case 14: datas[index] = $(this).text().trim(); index++; break;  //节数 5
                    case 16: datas[index] = $(this).text().trim(); index++; break;  //教学楼 6
                    case 17: datas[index] = $(this).text().trim(); index++; break;  //教室 7
                }
            })
            index = 0;
        }
        //对上面课程的补充
        else {
            flag = 0;
            $(this).children('td').each(function (j, elem) {
                switch (j) {
                    case 0: datas[index] = $(this).text().trim(); index++; break;  //周次 0
                    case 1: datas[index] = $(this).text().trim(); index++; break;  //星期 1
                    case 2: datas[index] = $(this).text().trim(); index++; break;  //节次 2
                    case 3: datas[index] = $(this).text().trim(); index++; break;  //节数 3
                    case 5: datas[index] = $(this).text().trim(); index++; break;  //教学楼 4
                    case 6: datas[index] = $(this).text().trim(); index++; break;  //教室 5
                }
            })
            index = 0;
        }

        //一个新的对象
        if (flag == 1) {
            const Schema = {};
            objsIndex++;
            UnitsIndex = 0;
            Schema.schoolId = '东北农业大学';
            Schema.semesterId = '当前学期';
            Schema.teacher = datas[1];
            Schema.name = datas[0];
            Schema.timeStr = '这要写什么？'
            Schema.courseUnits = [];

            Schema.courseUnits[UnitsIndex] = {
                weeks: datas[2],
                smartWeek: 'smartWeek',
                dayOfWeek: change[datas[3]],
                count: datas[4],
                room: datas[6] + datas[7]
            }
            objs[objsIndex] = Schema;

            PrevSchema = Schema;
        }

        //继续使用刚刚保存的对象
        else {
            UnitsIndex++;

            PrevSchema.courseUnits[UnitsIndex] = {
                weeks: datas[0],
                smartWeek: 'smartWeek',
                dayOfWeek:  change[datas[1]],
                count: datas[2],
                room: datas[4] + datas[5]
            }

            objs[objsIndex] = PrevSchema;

        }
    })
    return objs;
}

//将阿拉伯数字dayofweek改成中国汉字
let change = ['零', '周一', '周二', '周三', '周四', '周五', '周六', '周日']








