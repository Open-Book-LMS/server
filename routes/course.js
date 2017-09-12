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

router.get('/:courseId/assignment/:assignId', (req, res) => {
  let assignId = req.params.assignId;
  queries.getCourseItembyId(assignId)
  .then(assignment => {
    res.send(assignment);
  })
  .catch(err => {
    res.send(err);
  })
})

router.get('/:id/gradebook', (req, res) => {
  let courseId = req.params.id;
  queries.getGradableAssignments(courseId)
  .then(results => {
    res.send(results.filter(assignment => {
      console.log(assignment)
      return assignment.gradebook == true;
    }))
  })
  .catch(err => {
    res.send(err);
  })
})

router.get('/:courseId/submissions', (req, res) => {
  let courseId = req.params.courseId;
  queries.getSubmissionsbyCourse(courseId)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  })
})

router.get('/:courseId/students', (req, res) => {
  let courseId = req.params.courseId;
  queries.getStudentsbyCourse(courseId)
  .then(results => {
    res.send(results);
  })
})

module.exports = router;
