var express = require('express');
var router = express.Router();
const queries = require('../database/queries');

router.get('/:id/navigation', (req, res) => {
  let courseId = req.params.id;
  queries.getCourseNavigationbyId(courseId)
  .then(navigation => {
    res.send(navigation);
    // res.send(navigation.navigation.map(assignment=>{
    //   return queries.getCourseItembyId(id);
    // }));
  })
  .catch(err => {
    res.send(err);
  })
})


module.exports = router;
