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

router.post('/:courseId/assignment', (req, res) => {
  let courseId = req.params.courseId;
  let newItem = req.body;
  queries.getToolTypeId(newItem.tool_name)
  .then(tool => {
    newItem.tool_type = tool.id;
    return 'done2'
  })
  .catch(err => {
    console.log(err);
  })
  .then(() => {
    queries.addCourseAssignment(courseId, newItem)
    .then(response => {
      console.log('createAssign', response);
      queries.addToCourseNavigation(1, response.id)
      res.send(response);
    })
    .catch(err => {
      console.log(err);
    })
  })
  .catch(err => {
    console.log(err);
  })
});

module.exports = router;
