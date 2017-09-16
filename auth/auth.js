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
  queries.getUserById(req.params.id)
  .then((user) => {
    res.send(user);
  })
});

module.exports = router;
