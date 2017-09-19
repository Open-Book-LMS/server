const express = require('express');
const router = express.Router();
const monk = require('./monk');

router.get('/seed', (req, res) => {
  const tools = monk.get('tools');
  const tools_insert = tools.insert([
    {
      tool_id: 'ART',
      tool_name: 'Article',
      tool_catergory: 'General',
      templates: {
        creation_view: '',
        instructor_view: '',
        student_view: ''
      },
      data: {
        articl_text: ''
      }
    },
    {
      tool_id: 'CBC',
      tool_name: 'Canvas Broadcast',
      tool_catergory: 'Art',
      templates: {
        creation_view: '',
        instructor_view: '',
        student_view: ''
      },
      data: {
        canvas_height: '300px',
        canvas_width: '600px',
        canvas_background: 'white',
        canvas_grid: false,
        canvas_save: {},
        chat: {}
      }
    },
    {
      tool_name: 'Drawing Assignment',
      tool_id: 'DRW',
      templates: {
        creation_view: '',
        instructor_view: '',
        student_view: '',
      },
      data: {
        canvas_height: '400px',
        canvas_width: '400px',
        background_color: 'white',
        canvas_grid: false,
        brushMin: 1,
        brushMax: 20,
        brushColors: [],
        canvas_save: {},
      }
    },
  ])

  const assignments =  monk.get('assignments');
  const assignments_insert = assignments.insert([
      {
        name: 'Architectural Wonders',
        description: 'This is about buildings.',
        data: {
          article_text: 'CONTENT',
        },
        tool_type: "ART",
        course_id: 1,
        gradebook: false
      },
      {
        name: 'Drawing Demonstration: Color Theory',
        start_date: '20170904',
        end_date: '20171004',
        assigned: true,
        course_id: 1,
        tool_type: 'CBC',
        gradebook: true,
        grading_rubric: [
          {text: 'Attend the demonstration.'},
          {text: 'Provide one comment about the use of color in chat.'}
        ],
        data: {
            canvas_height: '300px',
            canvas_width: '600px',
            canvas_background: '#FFFFFF',
            canvas_grid: false,
            canvas_save: {},
            chat: [
              {name: 'Kathryn Jimenez', message: 'Be sure to pay attention to how complimentary colors look next to each other while I draw this next section. Please respond with your observations.' },
              {name: 'Micheal Roy', message: 'That green looks a lot brighter, with that maroon next to it.'},
              {name: 'Maude Peters', message: "It's so much different in contrast."},
              {name: 'Kathryn Jimenez', message: 'Very good!'},
              {name: 'Kathryn Jimenez', message: 'Now what do you think will happen if I change the background to a forest green?'}
            ]
          },
        template: {}
      },
      {
        name: 'Documenting Architectural Heritage',
        description: 'This is about heritage.',
        data: {
          article_text: 'CONTENT'
        },
        course_id: 1,
        tool_type: "ART",
        gradebook: false
      },
      {
        name: 'Drawing Demonstration: Contrast',
        start_date: '20171015',
        end_date: '20171015',
        assigned: false,
        course_id: 1,
        tool_type: 'CBC',
        gradebook: true,
        grading_rubric: [],
        data: {
            canvas_height: '600px',
            canvas_width: '600px',
            canvas_background: '#D33115',
            canvas_grid: true,
            canvas_save: {},
            chat: {}
          },
        template: {}
      },
      {
        name: 'Drawing: Monocromatic Still Life',
        start_date: '20171015',
        end_date: '20171020',
        assigned:true,
        course_id:1,
        tool_type: 'DRW',
        gradebook: true,
        grading_rubric: ['Draw a still life.', 'Use the limited color palette to express shadows and highlights.'],
        template: {},
        data: {
          canvas_height: '400px',
          canvas_width: '400px',
          background_color: '#009CE0',
          brushMin: 1,
          brushMax: 20,
          brushColors: [  '#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00',
        '#DBDF00', '#A4DD00', '#68CCCA',  '#333333', '#808080', '#CCCCCC'],
        }
      },
      {
        name: 'Portfolio Rubric',
        description: 'This is about your final.',
        data: {
          article_text: 'IMPORTANT CONTENT'
        },
        course_id: 1,
        tool_type: "ART",
        gradebook: true
      }
      // {
      //   name: 'Architectural Wonders',
      //   start_date: '2017',
      //   end_date: '',
      //   assigned: false,
      //   course_id: 1,
      //   tool_type: 2,
      //   grading_rubric: [],
      //   config: {
      //     tool_setting: {},
      //     template: {
      //       data: {}
      //     }
      //   }
      // },
    ]);
  let navigationMap;
  Promise.all([tools_insert, assignments_insert]).then(() =>{
    assignments.find({}).then(results => {
      console.log('assign', results);
      navigationMap = results.map(assignment => {
        return assignment._id;
      })
    }).then(() => {



  console.log('nav', navigationMap);
    const course_structure = monk.get('course_structure');
    const course_structure_insert = course_structure.insert([
      {
        course_id: 1,
        navigation: navigationMap,
      }
    ]);

    const submissions =  monk.get('submissions');
    const submissions_insert = submissions.insert([
      {
        student_id: 3,
        assignment_id: navigationMap[1],
        course_id: 1,
        timestamp: '',
        name: 'Attendance',
        grade: 3,
        graded: true,
        viewed: true,
        location: '',
        grading_rubric: [
          {met: true, text: 'Attend the demonstration.'},
          {met: false, text: 'Provide one comment about the use of color in chat.'}
        ],
      },
      {
        student_id: 4,
        assignment_id: navigationMap[1],
        course_id: 1,
        timestamp: '',
        name: 'Attendance',
        grade: 0,
        graded: false,
        viewed: true,
        location: '',
        grading_rubric: []
      },
      {
        student_id: 5,
        assignment_id: navigationMap[1],
        course_id: 1,
        timestamp: '',
        name: 'Attendance',
        grade: 0,
        graded: false,
        viewed: false,
        location: '',
        grading_rubric: []
      },
      // {
      //   student_id: 1,
      //   assignment_id: 1,
      //   timestamp: '',
      //   name: '',
      //   grade: 0,
      //   graded: false,
      //   viewed: false,
      //   location: ''
      // }
    ])

    Promise.all([course_structure_insert, submissions_insert]).then(() => {
      res.send('Done!');
    })
  })
})
})
router.get('/delete', (req, res) => {
  const tools = monk.get('tools');
  const course_structure = monk.get('course_structure');
  const assignments =  monk.get('assignments');
  const submissions =  monk.get('submissions');
  const delete_tools = tools.drop();
  const delete_course_structure = course_structure.drop();
  const delete_assignments = assignments.drop();
  const delete_submissions = submissions.drop();
  Promise.all([delete_tools, delete_course_structure, delete_assignments, delete_submissions]).then(() =>{
    res.send('Done!');
  })
});

module.exports = router;
