

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
var MongoStore = require('connect-mongo')(session);
var multer = require('multer');
var mime = require('mime-types');
var randomstring = require('randomstring');
var path = require('path');

//mongoose.connect('mongodb://localhost:27017/one_mirror');
mongoose.connect('mongodb://test:test@ds141068.mlab.com:41068/one-mirror');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, 'uploads'))
  },
  filename: function (req, file, cb) {
    const extension = mime.extension(file.mimetype);
    const filename = randomstring.generate();
    cb(null, filename + '.' + extension)
  }
})
var upload = multer({ storage: storage });

app.use('/uploads', express.static('uploads'))

//app.use(cors());
app.use(bodyParser.json());


// Cross-origin resource sharing - Middelware
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'HEAD', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
  credentials: true // enable set cookie
}));

app.use(session({
  proxy: true,
  secure: false,
  resave: true,
  secret: 'qwertyuiop1234567890',
  saveUninitialized: true,
  cookie: {
    maxAge: (60000 * 60),
    secure: false, // this should be false for localhost
    httpOnly: false,
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));


app.get('/test', function (req, res) {
  res.send('Hello Server');
})

// Searching for student in db

validateStudentId= [
  check('StudentID','Please enter a student ID ').not().isEmpty()

]

app.post('/student/search', validateStudentId, function (req, res) {
  console.log(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //console.log(errors);
    return res.status(422).json({ errors: errors.mapped() });
  }

  console.log(req.body);
  Student.findOne(req.body)
    .then(function (user) {
      if (!user) {
        return res.send({ status: 'error', message: 'Student not found' });
      }
      console.log(user);
      res.send(user);
    })
    .catch(function (error) {
      console.log(error);
      res.send({ error: 'error', message: 'Something went wrong' });
    })
})


//Get the Student Badges

app.post('/student/badges',function(req,res){
  Badge.find({ StudentID: req.body.studId }).sort({Status: -1})
  .then(function(info){
      //console.log(message);
      res.send(info);
  })
  .catch(function(error){
      res.send({status: 'error', message: 'Something went wrong'});
  });
});

// Student Login


const studentLoginValidation = [
  check('StudentID', 'Please enter a StudentID').not().isEmpty(),
  check('Password', 'Please enter your password').not().isEmpty(),
  check('StudentID', 'Please enter a valid StudentID').custom(value => {
    return Student.find({ 'studentid': value })
      .then(user => {
        if (user.length)
          return false;
        else
          return true;
      })
  })
];

app.post('/student/login', studentLoginValidation, function (req, res) {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    console.log(errors.mapped());
    return res.status(422).json({ errors: errors.mapped() });
  }
  Student.findOne(req.body)
    .then(function (user) {
      if (!user) {
        return res.send({ status: 'error', message: 'no student found' })
      }
      req.session.userIsLoggedin = user;
      res.send(user);
    }).catch(function (error) {
      res.send({ error: 'error', message: 'Something went wrong' })
    });
});


//student ChangeRequest
app.post('/student/changereq', function (req, res) {
  console.log(req.body);
  ChangeReq.create(req.body)
    .then(function (changereq) {
      res.send(changereq);
    }).catch(function (error) {
      res.send({status: 'error', message: 'Something went wrong with change request'})
    });
})



// Uncomment to add an admin user
// Admin.create({
//     firstName: 'Jen',
//     lastName: 'Sibunga',
//    Email: 'admin@gmail.com',
//    Password: 'test12345'
//  })



app.post('/api/admin/login', function (req, res) {
  console.log(req.body);
  Admin.findOne({
    Email: req.body.email,
    Password: req.body.password
  })
    .then(function (admin) {
      if (!admin) {
        let errors_value = {
          login: { msg: 'Wrong email or password' }
        }
        return res.send({ errors: errors_value })
      } else {
        req.session.admin = admin;
        return res.send({ message: 'You are signed in' });
      }

      res.send(admin);
    })
    .catch(function (error) {
      console.log(error);

    })
})

app.get('/api/current_admin', function (req, res) {
  console.log(req.session)
  if (req.session.admin) {
    Admin.findById(req.session.admin._id)
      .then(function (admin) {
        res.send({
          _id: admin._id,
          email: admin.email,
          firstName: admin.firstName,
        })
      })
  } else {
    res.send({ error: 'not logged in' })
  }
});


//Admin registration / create User and Validation

///Log Out
app.get('/api/admin/logout', function (req, res) {
  req.session.destroy();
  res.send({ message: 'session destroyed' })
});

//Admin registration / create User and Validation
app.post('/api/student/register',
  upload.fields([{ name: 'photo', maxCount: 1 }]), //multer files upload
  [
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
      //.isEmail().withMessage('Invalid Email')
      .custom(value => {
        return Student.findOne({ email: value })
          .then(function (student) {
            if (student) {
              throw new Error('This email is already in use');
            }
            //return value;
          })
      }),
    check('shortDescription')
      .not().isEmpty().withMessage('Minimum 100 characters are required'),
    // ??check('photo')
    // .not().isEmpty()
    //??check('video')
    check('ID')
      .not().isEmpty()
      .custom(value => {
        return Student.findOne({ StudentID: value })
          .then(function (student) {
            if (student) {
              throw new Error('This student ID is already in use');
            }
            //return value;
          })
      }),
    check('status')
      .not().isEmpty(),

  ],
  function (req, res) {
    console.log(req.body)
    //console.log(req.files.photo[0].filename);
    //console.log('register student')
    var errors = validationResult(req);
    console.log(errors.mapped());
    if (!errors.isEmpty()) {
      // console.log('errors')
      // console.log(errors.mapped());
      return res.send({ errors: errors.mapped() });
    }

    console.log('create student')
    console.log(req.body);
    Student.create({
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
      StudentID: req.body.ID,
      DateOfBirth: req.body.dateOfBirth,
      Email: req.body.email,
      Video: req.body.video,
      profilePic: req.files.photo[0].filename,
      ShortDescription: req.body.shortDescription,
      Password: req.body.password,
      Status: req.body.status,
      LinkedIn_link: req.body.linkedinLink,
      Github_link: req.body.githubLink,
      hackerRank_link: req.body.hackerRankLink,
      CV_link: req.body.CVlink

    })
      .then(function (student) {
        console.log(student)
        res.send(student);
      })
      .catch(function (error) {
        console.log(error);
        res.send(error);
      })

  })

//Showing List of Students
app.get('/api/listofstudents', function (req, res) {
  Student.find({})
    .sort({
      StudentId: 'desc'
    })
    .then((students) => {
      res.send(students);
    }
    ).catch((error) => {
      res.send({ status: error, message: 'Cannot find students' });
    })
})

//Admin Student View Profile
app.get('/api/student/:StudentID/viewprofile', function (req, res) {
  console.log(req.params);
  Student.findOne({ StudentID: req.params.StudentID })

    .then(function (result) {
      res.send(result);
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    })
})
//Admin adding Badges
app.post('/api/admin/:StudentID/addbadges',function(req,res){
  console.log(req.body);
  Badge.create({
    StudentID:req.params.StudentID,
    BadgeName:req.body.badge,
    Status:1
  })
  .then(function (badges) {
    console.log(badges)
    res.send(badges);
  })
  .catch(function (error) {
    console.log(error);
    res.send(error);
  })

})

//Admin Adding Scores

app.post('/api/admin/:StudentID/addscores', [
  check('score')
    .not()
    .isEmpty()
    .withMessage('Please add score')
],
  function (req, res) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.mapped() });
    }

    console.log(req.body);
    console.log(req.params);

    // Score.update({
    //   ChallengeName: req.body.challenge,
    //   StudentID: req.params.StudentID,
    //   Score: req.body.score,
    // })

    Score.findOne({
      ChallengeName: req.body.challenge,
      StudentID: req.params.StudentID,
    })
      .then(function (scoreDocument) {
        console.log(scoreDocument);
        if (scoreDocument) {
          scoreDocument.Score = req.body.score
          scoreDocument.save();
          res.send(scoreDocument);
        } else {
          Score.create({
            ChallengeName: req.body.challenge,
            StudentID: req.params.StudentID,
            Score: req.body.score

          })
            .then(function (score) {
              console.log(score);
              res.send(score);
            })
            .catch(function (error) {
              console.log(error);
            })
        }
      })

  })




//Get Request Add Scores

app.get('/api/admin/:StudentID/scores', function (req, res) {
  Student.findOne({ StudentID: req.params.StudentID })
    .then(function (student) {
      console.log('student', student);
      Score.find({ StudentID: req.params.StudentID })
        .then(function (scores) {
          // send back student and scores
          var responseBody = {
            student: student,
            scores: scores,
          }
          console.log(responseBody);

          res.send(responseBody);
          //console.log(result);
        })
        .catch(function (error) {
          console.log(error);
        })
    })
    .catch(function (error) {
      console.log(error);
    })
})


//Admin Getting Student to Edit

app.get('/api/:StudentID/getedititem', function (req, res) {

  console.log('request get', req.body);

  Student.findOne({ StudentID: req.params.StudentID })
    .then(function (student) {
      console.log('student', student);
      res.send({ student })
    })
    .catch(function (error) {
      console.log(error);
    })
})



//Admin Editting the student
app.post('/api/:StudentID/update',
  upload.fields([{ name: 'photo', maxCount: 1 }]), //multer files upload
  [
    check('firstName').not().isEmpty().withMessage('First name is required')
      .isLength({ min: 2 }).withMessage('Firstname should be at least 2 letters')
      .matches(/^([A-z]|\s)+$/).withMessage('Firstname cannot have numbers'),
    check('lastName')
      .not().isEmpty().withMessage('Last name is required')
      .isLength({ min: 2 }).withMessage('Lastname should be at least 2 letters')
      .matches(/^([A-z]|\s)+$/).withMessage('Lastname cannot have numbers'),
    //check('shortDescription')
     // .not().isLength({ min: 150 }).withMessage('Description should have minimum 150 characters length'),
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
    //check('shortDescription')
      //.not().isLength({ min: 100 }).withMessage('Description minimum 100 characters'),
    // ??check('photo')
    // .not().isEmpty()
    //??check('video')
    check('ID')
      .custom(value => {
        return Student.findOne({ StudentID: value })
          .then(function (student) {
            if (student) {
              throw new Error('This student ID is already in use');
            }
          })
        //return value;
      }),


  ],

  function (req, res) {
    var errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.send({ errors: errors.mapped() });
    }

    Student.findOne({ StudentID: req.params.StudentID })
      .then(function (student) {
        student.FirstName = req.body.firstName
          student.LastName = req.body.lastName

          student.DateOfBirth = req.body.dateOfBirth
          student.Email = req.body.email
          student.Video = req.body.video
          if (req.files.photo) {
            student.profilePic = req.files.photo[0].filename
          }
          student.LinkedIn_link = req.body.linkedinLink
        student.hackerRank_link= req.body.hackerRankLink
        student.Github_link = req.body.githubLink
          student.CV_link = req.body.CVlink
          student.ShortDescription = req.body.shortDescription
          student.Status = req.body.status

          student.save()
            .then(function (student) {
              console.log('test1')
              res.send(student);
            })
            .catch(function (error) {
              console.log('test2')
              console.log(error);
              res.send(error);
            })
      })
      .catch(function(error) {
        console.log('test3')
        console.log(error);
        res.send(error);
      })
  });

app.listen(8080, function () {
  console.log('listening on port 8080');
})
