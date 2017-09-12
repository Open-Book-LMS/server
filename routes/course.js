var express = require('express');
var router = express.Router();
const queries = require('../database/queries');

router.get('/:id/navigation', (req, res) => {
  let courseId = req.params.id;
  queries.getCourseNavigationbyId(courseId)
  .then(navigation => {
    console.log(navigation);
    Promise.all(navigation.navigation.map(assignment=>{
      console.log('map', assignment);
      return queries.getCourseItembyId(assignment);
    }))
    .then((courseNavigation) => {
      res.send(courseNavigation);
    })

  })
  .catch(err => {
    res.send(err);
  })
});

router.get('/assignment/:id', (req, res) => {
  let assignId = req.params.id;
  queries.getCourseItembyId(assignId)
  .then(assignment => {
    res.send(assignment);
  })
})


module.exports = router;
