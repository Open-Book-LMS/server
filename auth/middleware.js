const jwt = require('jsonwebtoken');

require('dotenv').config();

function allowAccess(req, res, next){
  let authHeader = req.get('Authorization');
  let token = authHeader.split(' ')[1];
  console.log('token', token);
  if(token){
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if(!err && req.params.id == decoded.id){
        return next();
      } else {
        res.status(401)
        next(new Error('Unauthorized'))
      }
    })
  } else {
    res.status(401)
    next(new Error('Unauthorized'))
  }
}

module.exports = { allowAccess };
