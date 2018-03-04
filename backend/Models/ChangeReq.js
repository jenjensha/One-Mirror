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
    status:{
        type: String,
        default: "pending"
    }

})

<<<<<<< HEAD
module.exports = mongoose.model('Changereq', ChangeReqSchema);
=======
module.exports = mongoose.model('changereq', ChangeReqSchema);
>>>>>>> anthony
