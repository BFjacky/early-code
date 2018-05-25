const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const commentModel = require('./comment.js')
const timesModel = require('./times.js')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use('/static', express.static('public'));
let myTimes = 0;
app.get('/', async function (req, res) {
    console.log(myTimes++);
    const html = fs.readFileSync(path.join(__dirname, "./index.html"));
    res.end(html);
});
app.get('/comment', async function (req, res) {
    console.log('comment收到了请求')
    const name = req.query.name;
    const wishes = req.query.wishes;
    const cookie = req.cookies.wishCookie;
    const findWishes = await commentModel.find({ cookie: cookie });
    if (findWishes.length >= 6) {
        res.end('fail');
        return;
    }
    //如果已经评论了5条以上则不让评论

    const mySchema = new commentModel({
        name: name,
        comment: wishes,
        cookie: cookie,
    })
    mySchema.save();
    res.end('ok')
});
app.get('/getWishes', async function (req, res) {
    const pswd = req.query.pswd;
    if (pswd === 'clsige,z3;2d') {
        const wishes = await commentModel.find();
        res.json(wishes);
    }
    else {
        res.end('o')
    }
});


var server = app.listen(7003, function () {

});