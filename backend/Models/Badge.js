var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BadgeSchema = new Schema({

    StudentID:{
        type: String,
        required: true
    },
    Badge1Status:{
        type: Number,
        Default: 0
    },
    Badge2Status:{
        type: Number,
        Default: 0
    },
    Badge3Status:{
        type: Number,
        Default: 0
    },
    Badge4Status:{
        type: Number,
        Default: 0
    },
    Badge5Status:{
        type: Number,
        Default: 0
    },
    Badge6Status:{
        type: Number,
        Default: 0
    }
})

module.exports = mongoose.model('Badge', BadgeSchema);
