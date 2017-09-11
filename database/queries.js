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
  }
}
