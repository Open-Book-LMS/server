const knex = require('./knex');
const monk = require('./monk');

module.exports = {
  getCoursesById: (id) => {
    return knex('enrollment')
    .join('course', 'course_id', '=', 'course.id')
    .where('enrollment.account_id', id);
  },
  getCourseNavigationbyId: (id) => {
    let course_structure = monk.get('course_structure');
    return course_structure.findOne({course_id: Number(id)});
  },
  getCourseItembyId: (assignmentId) => {
    let assignments = monk.get('assignments');
    console.log('assignId', assignmentId);
    return assignments.findOne({_id: monk.id(assignmentId)});
  },
  getGradableAssignments: (courseId) => {
    let assignments = monk.get('assignments');
    return assignments.find({course_id: Number(courseId)})
  },
  getSubmissionsbyCourse: (courseId) => {
    let submissions = monk.get('submissions');
    return submissions.find({course_id: Number(courseId)});
  },
  getStudentsbyCourse: (courseId) => {
    return knex('account')
    .join('enrollment', 'account.id', '=', 'account_id')
    .where('enrollment.course_id', courseId)
    .andWhere('account.type', 'student')
    .select('account.id', 'account.email', 'account.first_name', 'account.last_name', 'account.grade', 'account.timezone');
  },
  getHighestAssignmentId: () => {
    let assignments = monk.get('assignments');
    return assignments.find({});
  },
  // getToolTypeId: (tool) => {
  //   console.log('query', tool);
  //   let tools = monk.get('tools');
  //   return tools.findOne({tool_name: tool});
  // },
  addCourseAssignment: (courseId, assignment) => {
    let assignments = monk.get('assignments');
    return assignments.insert(assignment);
  },
  addToCourseNavigation: (courseId, assignId) => {
    let course_structure = monk.get('course_structure');
    course_structure.findOneAndUpdate({course_id: courseId},{
        $push:{
          "navigation":assignId
        }
    })
  },
  getUserById: (userId) => {
    return knex('account')
    .where('id', userId)
    .select('account.id', 'account.email', 'account.first_name', 'account.last_name', 'account.grade', 'account.type', 'account.timezone');
  },
  getSubmissionsbyStudent: (userId) => {
    let submissions = monk.get('submissions');
    return submissions.find({student_id: userId});
  },
  addCanvasRecord: (assignId, canvas) => {
    let assignments = monk.get('assignments');
    return assignments.findOneAndUpdate({_id: assignId}, {canvas_save: canvas});
  },
  getUserForLogin: (userId) => {
    return knex('account').where('id', userId);
  }
}
