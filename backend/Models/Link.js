var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LinkSchema = mongoose.Schema({

    StudentID:{
        type: String,
        required: true
    },
    Name:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    OldLink:{
        type: String,
        required: true
    },
    NewLink:{
        type: String,
        required: true
    },
    Status:{
        type: String,
        defualt: "pending"
    }

})

module.exports = mongoose.model('link', LinkSchema);
