const mongoose = require('mongoose');

var ChangeReqSchema = mongoose.Schema({

    StudentID:{
        type: String,
        required: true
    },
    FirstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    Text:{
        type: String,
        required: true
    },
    status:{
        type: String,
        default: "pedning"
    }
    
})

module.exports = mongoose.model('changereq', ChangeReqSchema);