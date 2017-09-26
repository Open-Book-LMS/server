var express = require('express');
var router = express.Router();
const queries = require('../database/queries');
const middleware = require('../auth/middleware');

//get courses by users
router.get('/:id/courses', middleware.allowAccess, (req, res) => {
 let userId = req.params.id;
 queries.getCoursesById(userId)
 .then(courseList => {
   res.send(courseList);
 })
 .catch(err => {
   console.log(err);
 });
});

module.exports = router;
