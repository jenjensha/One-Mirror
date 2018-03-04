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
        type: String,
        Default: null
    }

})

module.exports = mongoose.model('Badge', BadgeSchema);
