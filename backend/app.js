var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var Admin = require('./Models/Admin');
var Badge = require('./Models/Badge');
var ChangeReq = require('./Models/ChangeReq');
var Link = require('./Models/Link');
var Score = require('./Models/Score');
var Student = require('./Models/Student');
var { check, validationResult } = require('express-validator/check');
var session = require('express-session');


mongoose.connect('mongodb://localhost:27017/one_mirror');
//mongoose.connect('mongodb://test:test@ds141068.mlab.com:41068/one-mirror');

//app.use(cors());
app.use(bodyParser.json());


// Cross-origin resource sharing - Middelware
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true // enable set cookie
}));

// Session - Middelware
app.use(session({
  resave: true,
  secret: 'Vt9PxTrm~E{4`9]T',
  saveUninitialized: true,
  cookie: { maxAge: 16000 }
}));


app.get('/test', function (req, res) {
  res.send('Hello Server');
})

//Admin registration / create User and Validation
app.post('api/student/register', [
  check('firstName').not().isEmpty().withMessage('First name is required')
    .isLength({ min: 2 }).withMessage('Firstname should be at least 2 letters')
    .matches(/^([A-z]|\s)+$/).withMessage('Firstname cannot have numbers'),
  check('lastName')
    .not().isEmpty().withMessage('Last name is required')
    .isLength({ min: 2 }).withMessage('Lastname should be at least 2 letters')
    .matches(/^([A-z]|\s)+$/).withMessage('Lastname cannot have numbers'),
  check('password')
    .not().isEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password should be at least 6 characters'),
  check('dateOfBirth')
    .not().isEmpty().withMessage('Date of birth required'),

  check('email')
    .isEmail()
    .custom(value => {
      return Student.findOne({ email: value })
        .then(function (student) {
          if (student) {
            throw new Error('this email is already in use');
          }
        })
      //return value;
    }),
  check('shortDescription')
    .not().isEmpty().isLength({ min: 150 }),
  // ??check('photo')
  // .not().isEmpty()
  //??check('video')
  check('ID')
    .not().isEmpty(),


], function (req, res) {
  Student.create({
    FirstName: req.body.firstName,
    LastName: req.body.LastName,
    StudentID: req.body.ID,
    DateOfBirth: req.body.dateOfBirth,
    Email: req.body.email,
    Video: req.body.video,
    profilePic: req.body.photo,

    ShortDescription: req.body.shortDescription,
    Password: req.body.password,
    Status: req.body.status,
    LinkedIn_link: req.body.linkedinLink,
    Github_link: req.body.githubLink,
    hackerRank_link: req.body.hackerRankLink,
      CV_link: req.body.CVlink

  })

})

app.get('api/listofstudents', function(req, res){
 Student.find({})
 .sort({
   StudentId: 'desc'
 })
 .then((students) =>{
   res.send(students);
 }
 ).catch((error)=> {
   res.send({status: error , message:'Cannot find studens'});
 })

 





app.listen(8080, function () {
  console.log('listening on port 8080');
})
