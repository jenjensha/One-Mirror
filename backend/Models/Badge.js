var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BadgeSchema = new Schema({

  StudentID:{
      type: String,
      required: true
  },
  Badge1:{
      type: Boolean,
      default: false
  },
  Badge2:{
      type: Boolean,
      default: false
  },
  Badge3:{
      type: Boolean,
      default: false
  },
  Badge4:{
      type: Boolean,
      default: false
  },
  Badge5:{
      type: Boolean,
      default: false
  },
  Badge6:{
      type: Boolean,
      default: false
  }
})

module.exports = mongoose.model('Badge', BadgeSchema);
