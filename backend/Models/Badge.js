var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BadgeSchema = new Schema({

<<<<<<< HEAD
    StudentID:{
        type: String,
        required: true
    },
    Badge1Status:{
        type: Number,
        Default: 0
    },
    Badge2Status:{
        type: Number,
        Default: 0
    },
    Badge3Status:{
        type: Number,
        Default: 0
    },
    Badge4Status:{
        type: Number,
        Default: 0
    },
    Badge5Status:{
        type: Number,
        Default: 0
    },
    Badge6Status:{
        type: Number,
        Default: 0
    }
=======
   StudentID:{
       type: String,
       required: true
   },
   Badge1:{
       type: Number,
       Default: 0
   },
   Badge2:{
       type: Number,
       Default: 0
   },
   Badge3:{
       type: Number,
       Default: 0
   },
   Badge4:{
       type: Number,
       Default: 0
   },
   Badge5:{
       type: Number,
       Default: 0
   },
   Badge6:{
       type: Number,
       Default: 0
   }
>>>>>>> srinidhi4
})

module.exports = mongoose.model('Badge', BadgeSchema);
