const db = require('./db.js')

let Schema = db.Schema

const bangRoom = new Schema(
    {
        roomName: String,
        nowVal: Number,
        nowPlayer: String,
        sumPlayer: Number,
    }, {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
)

module.exports = db.model('bangRoom', bangRoom);
