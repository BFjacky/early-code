/*
    学生类，用于保存每次请求时每个学生的学号，密码，cookie，验证码。
*/
class Student{
    constructor(stuId,password){
        this.stuId = stuId;
        this.password = password;
    }
    setCookie(cookie){

        this.cookie = cookie;
    }
    setCaptcha(captcha){

        this.captcha = captcha;
    }
    setStuId(stuId){
        this.stuId = stuId;
    }
    setPassword(password){
        this.password = password;
    }
    setMyCookie(MyCookie){
        this.MyCookie=MyCookie;
    }
}

module.exports = Student;
