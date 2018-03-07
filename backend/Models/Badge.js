var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BadgeSchema = new Schema({

    StudentID:{
        type: String,
        required: true
    },
    Badge1:{
        type: Number,
        Default: 0
    },
    Badge2:{
        type: Number,
        Default: 0
    },
    Badge3:{
        type: Number,
        Default: 0
    },
    Badge4:{
        type: Number,
        Default: 0
    },
    Badge5:{
        type: Number,
        Default: 0
    },
    Badge6:{
        type: Number,
        Default: 0
    }
})

module.exports = mongoose.model('Badge', BadgeSchema);
