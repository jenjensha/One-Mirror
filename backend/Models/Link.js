var mongoose = require('mongoose');
var Schema = mongoose.Schema;

<<<<<<< HEAD
var LinkSchema = mongoose.Schema({
=======
var AdminSchema = new Schema({
>>>>>>> master

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

<<<<<<< HEAD
module.exports = mongoose.model('link', LinkSchema);
=======
module.exports = mongoose.model('Admin', AdminSchema);
>>>>>>> master
