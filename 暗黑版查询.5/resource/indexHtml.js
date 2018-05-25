
$(document).ready(function () {
    let COURSES;

    $.get('/getScore', function (data, status, xhr) {
        console.log('getscore请求收到返回信息了');
        let index = 0;
        let add = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        //颜色选择器
        data.forEach(function (e) {
            index = parseInt(Math.random() * 20)
            switch (index % 20) {
                case 0:
                    $('#Score').append('<div class="add add1"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add1').eq(add[1]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[1]++;
                    break;
                case 1:
                    $('#Score').append('<div class="add add2"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add2').eq(add[2]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[2]++;
                    break;
                case 2:
                    $('#Score').append('<div class="add add3"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add3').eq(add[3]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[3]++;
                    break;
                case 3:
                    $('#Score').append('<div class="add add4"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add4').eq(add[4]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[4]++;
                    break;
                case 4:
                    $('#Score').append('<div class="add add5"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add5').eq(add[5]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[5]++;
                    break;
                case 5:
                    $('#Score').append('<div class="add add6"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add6').eq(add[6]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[6]++;
                    break;
                case 6:
                    $('#Score').append('<div class="add add7"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add7').eq(add[7]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[7]++;
                    break;
                case 7:
                    $('#Score').append('<div class="add add8"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add8').eq(add[8]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[8]++;
                    break;
                case 8:
                    $('#Score').append('<div class="add add9"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add9').eq(add[9]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[9]++;
                    break;
                case 9:
                    $('#Score').append('<div class="add add10"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add10').eq(add[10]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[10]++;
                    break;
                case 10:
                    $('#Score').append('<div class="add add11"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add11').eq(add[11]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[11]++;
                    break;
                case 11:
                    $('#Score').append('<div class="add add12"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add12').eq(add[12]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[12]++;
                    break;
                case 12:
                    $('#Score').append('<div class="add add13"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add13').eq(add[13]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[13]++;
                    break;
                case 13:
                    $('#Score').append('<div class="add add14"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add14').eq(add[14]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[14]++;
                    break;
                case 14:
                    $('#Score').append('<div class="add add15"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add15').eq(add[15]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[15]++;
                    break;
                case 15:
                    $('#Score').append('<div class="add add16"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add16').eq(add[16]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[16]++;
                    break;
                case 16:
                    $('#Score').append('<div class="add add17"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add17').eq(add[17]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[17]++;
                    break;
                case 17:
                    $('#Score').append('<div class="add add18"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add18').eq(add[18]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[18]++;
                    break;
                case 18:
                    $('#Score').append('<div class="add add19"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add19').eq(add[19]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[19]++;
                    break;
                case 19:
                    $('#Score').append('<div class="add add20"></div>')
                    for (let attr in e) {
                        let JqueryEle = $('.add20').eq(add[20]);
                        JqueryEle.append('<div class="childrenAdd">' + e[attr] + '</div>')
                    }
                    add[20]++;
                    break;
            }
        })
    });
    $.get('/getSchedule', function (data, status, xhr) {
        console.log('getSchedule请求收到返回信息了');
        //courses 用于盛放课程数组
        let courses = [];
        //遍历每个课程对象
        data.forEach(function (e) {
            let course = {};
            //遍历课程对象的每一个属性
            for (let attr in e) {
                //属性是string类型，直接拿走需要的信息
                if (typeof e[attr] === 'string') {
                    //教师姓名
                    if (attr === 'teacher') {
                        course.teacher = e[attr];
                    }
                    //课程名称
                    if (attr === 'name') {
                        course.name = e[attr];
                    }
                }
                //属性是数组
                else if (typeof e[attr] === 'object') {
                    //遍历这个数组中的对象
                    e[attr].forEach(function (e) {
                        //遍历对象的每一个属性
                        for (let attr2 in e) {
                            //这里面遍历到有用的内容，要开始往课表中填东西了
                            if (attr2 === 'count') {
                                course.count = e[attr2]

                            }
                            if (attr2 === 'dayOfWeek') {
                                course.dayOfWeek = e[attr2]
                            }
                            if (attr2 === 'room') {
                                course.room = e[attr2]
                            }
                            if (attr2 === 'weeks') {
                                course.weeks = e[attr2]
                            }
                        }
                        //判断课程应该在课表中的位置
                        let number = PosCourse(course.count, course.dayOfWeek);
                        course.number = number;
                        //将课程哪几个周上用数组的形式表达出来
                        let days = inSureWeeks(course.weeks)
                        course.days = days;
                        //将封装信息的course放入courses数组中

                        //对象的深拷贝
                        let newCourse = {};
                        deepCopy(newCourse, course);
                        //将深拷贝的得到新对象push到对象数组中
                        courses.push(newCourse);
                    })
                }
            }
        })

        COURSES = courses;
        //将得到的courses对象数组画在课表上
        drawCourse(courses)
    });

    //更改状态横标的事件
    $('#item1').click(function () {
        $('#item1').attr('class', 'tab_item_current');
        $('#item2').attr('class', 'tab_item');
        $('#Score').css('display', 'none');
        $('#Schedule').css('display', 'block');

    })
    $('#item2').click(function () {
        $('#item1').attr('class', 'tab_item');
        $('#item2').attr('class', 'tab_item_current');
        $('#Schedule').css('display', 'none');
        $('#Score').css('display', 'block');
    })


    $('.week_blank').each(function () {
        $(this).click(function () {
            let nowWeek = 0;
            $('.week_blank_choose').each(function () {
                $(this).attr('class', 'week_blank')
            })
            $(this).attr('class', 'week_blank_choose')
            let weekstr = $(this).text();
            weekstr = weekstr.slice(1, -1);
            nowWeek = parseInt(weekstr);
            console.log(nowWeek)
            changeCourseColor(COURSES, nowWeek);
        })
    })
    $('.closeWindow').click(function () {
        $('.window').css('display', 'none');
    })
});

//对象深拷贝
function deepCopy(obj1, obj2) {
    for (let attr in obj2) {
        obj1[attr] = obj2[attr];
    }
}

function drawCourse(courses, nowWeek) {
    courses.forEach(function (e) {
        //判断该位置是否已经有了课程
        if ($('.course').eq(e.number).text() !== '') {
            //如果已经有了课程,则添加点击事件
            $('.course').eq(e.number).click(function (e) {
                $('.content').empty();
                $('.window').css('display', 'block');
                $('.content').append($(this).html());
            })
            //并改变该块的背景颜色
            $('.course').eq(e.number).css('border', '3px outset white');
            $('.course').eq(e.number).css('cursor', 'pointer');
        }
        if (!isNaN(e.number)) {
            $('.course').eq(e.number).append('<div class="courseData">' + e.name + '</div>' + '<div class="courseData">' + e.teacher + '</div>'
                + '<div class="courseData">' + e.room + '</div>' + '<div class="courseData">' + e.weeks + '</div>' + '<br/><br/>')
        }
    })
}
function changeCourseColor(courses, nowWeek) {
    courses.forEach(function (e) {
        let backgroundColor;
        //判断该课这周上不上
        if (e.days[nowWeek] === 1) {
            //这周上课
            backgroundColor = '#262626'
        } else {
            //这周不上课
            backgroundColor = '#454545'
        }
        if (!isNaN(e.number)) {
            $('.course').eq(e.number).css('background-color', backgroundColor)
        }
    })
}
let pos1 = {
    '一大': 0,
    '二大': 1,
    '三大': 2,
    '四大': 3,
    '五大': 4,
    '六大': 5,
}
let pos2 = {
    '周一': 0,
    '周二': 1,
    '周三': 2,
    '周四': 3,
    '周五': 4,
    '周六': 5,
    '周日': 6,
}

function PosCourse(count, dayOfWeek) {
    return pos1[count] * 7 + pos2[dayOfWeek]
}

//解析上课的周
function inSureWeeks(str) {
    let day = [];
    for (let i = 1; i <= 16; i++) {
        day[i] = 0;
    }
    switch (str) {
        case '双周上课':
            for (let i = 1; i <= 16; i++) {
                if (i % 2 === 0) {
                    day[i] = 1;
                }
            }
            return day;
        case '单周上课':
            for (let i = 1; i <= 16; i++) {
                if (i % 1 === 0) {
                    day[i] = 1;
                }
            }
            return day;
        case '全周上课':
            for (let i = 1; i <= 16; i++) {
                day[i] = 1;
            }
            return day;
    }

    let str2 = str.slice(0, -2);
    let str3 = str2.split('-');
    for (let i = parseInt(str3[0]); i <= parseInt(str3[1]); i++) {
        day[i] = 1;
    }

    return day;
}