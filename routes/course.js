var express = require('express');
var router = express.Router();
const queries = require('../database/queries');

router.get('/:id/navigation', (req, res) => {
  let courseId = req.params.id;
  queries.getCourseNavigationbyId(courseId)
  .then(naviagtion => {
    res.send(naviagtion.naviagtion);
  })
})


module.exports = router;
