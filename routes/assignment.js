var express = require('express');
var router = express.Router();
const queries = require('../database/queries');

router.get('/:assignId', (req, res) => {
  let assignId = req.params.assignId;
  queries.getCourseItembyId(assignId)
  .then(assignment => {
    res.send(assignment);
  })
  .catch(err => {
    res.send(err);
  })
})

module.exports = router;
