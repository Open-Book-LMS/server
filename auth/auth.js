const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const queries = require('../database/queries');
require('dotenv').config();


//Registration route for students
router.post('/register', (req, res, next) => {

});

//Login route for all users
router.put('/login', (req, res, next) => {

});

router.get('/user/:id', (req, res) => {
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
