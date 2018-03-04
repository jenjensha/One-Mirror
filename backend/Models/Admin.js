var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({

    Email:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Admin', AdminSchema);
