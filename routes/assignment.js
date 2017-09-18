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

router.post('/:assignId/canvas_save', (req, res) => {
  let assignId = req.params.assingId;
  queries.addCanvasRecord(assignId, req.body)
  .then((response) => {
    res.send(response);
  })
})

module.exports = router;
