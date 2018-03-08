var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChangeReqSchema = new Schema({

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
    title: {
      type: String,
      required: true
    },
    changeStatus:{
        type: String,
        default: "pending"
    }

})

module.exports = mongoose.model('changereq', ChangeReqSchema);
