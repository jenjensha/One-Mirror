var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BadgeSchema = new Schema({

    StudentID:{
        type: String,
        required: true
    },
    BadgeName:{
        type: String,
        required: true
    },
    Status:{
        type: Number,
        Default: 0,
    }

})

module.exports = mongoose.model('Badge', BadgeSchema);
