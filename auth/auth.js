const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const queries = require('../database/queries');
const middleware = require('./middleware');
require('dotenv').config();


//Registration route for students
router.post('/register', (req, res, next) => {

});

//Login route for all users

router.post('/login', (req, res, next) => {
  let email = req.body.email;
  queries.getUserForLogin(email)
  .then(user => {
    if(user){
      bcrypt.compare(req.body.password, user.password)
      .then(result => {
        if(result){
          jwt.sign({
            id:user.id
          }, process.env.TOKEN_SECRET, {expiresIn: '8h'}, (err, token) => {
            res.json({
              id: user.id,
              token
            })
          })
        } else {
          res.status(403)
          next(new Error('Invalid Password'))
        }
      })
    } else {
      res.status(403)
      next(new Error('Invalid User'))
    }
  })
});

router.get('/user/:id', middleware.allowAccess, (req, res) => {
  let userObj = {}
  queries.getUserById(req.params.id)
  .then((user) => {
    userObj = user[0]
    if (userObj.type === 'student'){
      queries.getSubmissionsbyStudent(userObj.id)
      .then((submissions) => {
        console.log(submissions);
        userObj.submissions = submissions;
        res.send(userObj);
      })
    } else {
        res.send(userObj);
    }
  })
});

module.exports = router;
