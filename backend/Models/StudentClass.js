var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentClass = new Schema({

  name: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('StudentClass', StudentClass);
