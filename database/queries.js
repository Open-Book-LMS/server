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
    console.log(assignmentId);
    let assignments = monk.get('assignments');
    return assignments.findOne({id: Number(assignmentId)});
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
  }
}
