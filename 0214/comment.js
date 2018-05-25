/*
    当前借阅的表格
*/
const db = require('./db.js');
Schema = db.Schema;
const comments = new Schema(
    {
        name: String,
        comment: String,
        cookie:String,
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);
module.exports = db.model('comments', comments);
