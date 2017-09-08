const knex = require('./knex');
const monk = require('./monk');

module.exports = {
  getCoursesById: (id) => {
    return knex('enrollment')
    .join('course', 'course_id', '=', 'course.id')
    .where('enrollment.account_id', id);
  },
  getCourseNavigationbyId: () => {
    return monk.course_structure.findOne({course_id: 1});
  }
}
