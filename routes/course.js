var express = require('express');
var router = express.Router();
const queries = require('../database/queries');

router.get('/:id/navigation', (req, res) => {
  let courseId = req.params.id;
  queries.getCourseNavigationbyId(courseId)
  .then(navigation => {
    Promise.all(navigation.navigation.map(assignment=>{
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

router.post('/:courseId/assignment', (req, res) => {
  let courseId = Number(req.params.courseId);
  let newItem = req.body;
  // queries.getToolTypeId(newItem.tool_type)
  // .then(tool => {
  //   newItem.tool_type = tool.tool_id;
  //   return 'done2'
  // })
  // .then(() => {
    queries.addCourseAssignment(courseId, newItem)
    .then(response => {
      queries.addToCourseNavigation(courseId, response._id)
      res.send(response);
    })
// });
});
module.exports = router;
