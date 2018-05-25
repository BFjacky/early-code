$(document).ready(function () {
    $('#button1').click(function () {
        $.get('/main/index', function (data, status, xhr) {
            console.log('进入成绩课表页面');
        })
    })
})