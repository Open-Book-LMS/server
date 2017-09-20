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
        description: "Architectural sites provide an important window into ancient cultures. Angkor Wat, an architectural treasure in the heart of Cambodia, reflects a civilization that integrated culture, nature, and religion, but the impacts of tourism threaten its future.",
        data: {
          article_text: "At first glance, it is business as usual at the great sandstone temple of Angkor Wat. Through a drape of evening haze, the ancient Cambodian superstructure sees another batch of tourists process across its moat and marvel at its grandeur. Local teenagers waggle cool drinks in the faces of passers-by and auto-rickshaw or \"tuk-tuk\" drivers loudly vie for business. It looks like what it is – a boom town.\

But the modern commercial success of the high-profile complex, on the site of the ancient city of Angkor, may be – literally – on shaky ground.\

According to heritage experts carrying out restoration work at the temple, which is one of the biggest sets of religious ruins in the world, a plethora of new hotels, cashing in on the country's near-exponential rise in tourist numbers, is sapping gallons of water from beneath nearby urban areas. They say this could upset the delicate foundations on which Angkor Wat sits and could lead to parts of it – including its famous celestial apsara, or carved nymphs – taking an unheavenly tumble to earth.\

Philippe Delanghe, the culture programme specialist at Unesco's Phnom Penh office, said this week: \"There is a very important balance between the sand and water on which the temple is built. And if that balance is taken away then we might have trouble with collapse.\

\"The growth in the number of hotels around Angkor Wat has meant that more and more holes are being drilled into the earth to extract water from the water table. And this has profound consequences for this imporant mix.",
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
        description: 'Development affects the colonial architecture of an old city in Southeast Asia altering the city’s infrastructure. The city is being rebuilt and is in need of cultural preservation.',
        data: {
            articl_text: '',
          article_text: "Myanmar has opened up its political system, improved its relationship with the West and ushered in a real estate boom in the past several years. That's mostly good news for Yangon, but not for its remarkable architectural heritage, which has come into the cross hairs of developers trying to cash in on rising land prices.\

\"These buildings are priceless,\" says Tint Lwin, who has taught English in a colonial-era building along the city's Pansodan Street for more than three decades. The building, constructed by a Baghdadi Jewish trader around 1906, has ocher-colored walls and Corinthian columns.\

Tint Lwin loves the atmosphere of the neighborhood, but worries it won't last. A modern mid-rise is going up across the road. The walls in his building are pitted with black mold, and rain has saturated some ceilings, leaving gaping holes.\
\"I feel very unhappy because of the negligence,\" says Tint Lwin, who, like most Burmese men, wears a longyi, a traditional wraparound skirt. He says if the building's roof isn't fixed properly, \"the rain will leak and destroy the whole structure.\"
The British, who ruled Burma for decades, constructed most of these buildings in their own image. But Tint Lwin doesn't see them as symbols of oppression; he sees them as part of Myanmar's heritage.\
\"You can't be xenophobic,\" he says, echoing the pragmatism of many here. \"These are our assets. This British architecture is a unique one. Almost all in Myanmar like these buildings.\"
That includes Maung Nyan, a 19-year-old punk rocker, who lives on the building's fourth floor. He's sitting on the floor of his apartment, wearing a black My Chemical Romance T-shirt and playing the Ramones' \"I Want to Be Sedated\" on an electric guitar. Maung Nyan is rebellious by Burmese standards, but when it comes to construction, he's a traditionalist.\

\"Because of the valuable architecture, I prefer this kind of old building to new buildings,\" says Maung Nyan, whose apartment is really a cagelike, cavernous stall with a wire-mesh door. \"I'm also proud to live here. If it's possible, I'd like to stay here until I die.\""
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
      // {
      //   name: 'Drawing: Monocromatic Still Life',
      //   start_date: '20171015',
      //   end_date: '20171020',
      //   assigned:true,
      //   course_id:1,
      //   tool_type: 'DRW',
      //   gradebook: true,
      //   grading_rubric: ['Draw a still life.', 'Use the limited color palette to express shadows and highlights.'],
      //   template: {},
      //   data: {
      //     canvas_height: '400px',
      //     canvas_width: '400px',
      //     background_color: '#009CE0',
      //     brushMin: 1,
      //     brushMax: 20,
      //     brushColors: [  '#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00',
      //   '#DBDF00', '#A4DD00', '#68CCCA',  '#333333', '#808080', '#CCCCCC'],
      //   }
      // },
      {
        name: 'Portfolio Rubric',
        description: 'This is about your final.',
        data: {
          article_text: "Circle the number (in pencil) that best shows how well you feel that you completed the criterion (objectives) for the assignment.\
Criteria 1 – Subject Matter: Student first name was the subject matter of the design (on one side)? Name design was carefully thought out?\
Criteria 2 – Space: Good usage of Positive and Negative SPACE creating a BALANCED design?  No big empty spaces (negative space)?\
Criteria 3 – Craftsmanship: Portfolio construction was neat, clean & complete? Followed directions?  Skillful use of the art tools & media?\
Criteria 4 – Effort:  Took time to develop ideas & complete project? (Didn’t rush.) Good use of class time?\
Criteria 5 – Work Habits:  Responsible with materials?  Cleaned up and put tools/materials in proper place? Helped table clean up?"
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
