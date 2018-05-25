/*
    当前借阅的表格
*/
const db = require('./db.js');
Schema = db.Schema;
const times = new Schema(
    {
        times: Number,
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);
module.exports = db.model('times', times);
