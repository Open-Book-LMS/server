const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


//Registration route for students
router.post('/register', (req, res, next) => {

});

module.exports = router;
