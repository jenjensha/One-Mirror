const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreSchema = new Schema({

    StudentID: {
        type: String,
        required: true
    },
    ChallengeName: {
        type: String,
        required: true
    },
    Score: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Score', ScoreSchema);
