const db = require('./db.js')

let Schema = db.Schema

const snakeScore = new Schema(
    {
        name: String,
        score: Number,
        time: String,
    }, {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
)

module.exports = db.model('snakeScore', snakeScore);
