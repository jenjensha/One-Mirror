var express = require('express');
var routes = express.Router();
var StudentClass= require('../Models/StudentClass');
var Student = require('../Models/Student');

// route: /api/admin/student/class/list
routes.get('/list', function(req, res) {
  console.log(req.body)
  StudentClass.find({})
  .sort({
    createdAt: 'desc',
  })
  .then(function(studentClass){
    res.send(studentClass)
  })
  .catch(function(error){
    res.send(error);
  })
});

routes.get('/:id', function(req, res) {
  StudentClass.findById(req.params.id)
    .then(function (studentClass) {
      res.send(studentClass)
    })
    .catch(function (error) {
      res.send(error);
    })
})

// route: /api/admin/student/class/add
routes.post('/add', function (req, res){
  console.log(req.body);

  StudentClass.create({
    name: req.body.name
  })
  .then(function(result){
    console.log(result);
    res.send(result);
  })
  .catch(function(error) {
    res.send(error);
  })
})

// /api/admin/student/class/:id/update
routes.post('/:id/update', function(req, res) {
  StudentClass.findById(req.params.id)
    .then(function(studentClass) {
      studentClass.name = req.body.name
      studentClass.save();
      res.send('success');
    })
    .catch(function(error) {
      res.send(error);
    })
});

routes.get('/:StudentClassId/students', function (req, res) {
  Student.find({ StudentClass: req.params.StudentClassId })
    .sort({
    _id: 'desc'
    })
    .populate('StudentClass')
    .then((students) => {
      res.send(students);
    }
    ).catch((error) => {
      res.send({ status: error, message: 'Cannot find students' });
    })
})



module.exports = routes;
