// Dummy data for CourseProblem model
const courseProblemsData = [
  {
    problem_title: 'Problem 1',
    problem_description: 'Description for Problem 1',
    sample_test_cases: [{ input: 'Input 1', output: 'Output 1' }],
    hidden_test_cases: [{ input: 'Input 2', output: 'Output 2' }],
  },
  {
    problem_title: 'Problem 2',
    problem_description: 'Description for Problem 2',
    sample_test_cases: [{ input: 'Input 3', output: 'Output 3' }],
    hidden_test_cases: [{ input: 'Input 4', output: 'Output 4' }],
  },
];

// Dummy data for Lesson model
const lessonsData = [
  {
    lesson_no: 1,
    contentype: 'text-material',
    lesson_title: 'Lesson 1',
    lesson_points: 100,
    text_content: 'Text content for Lesson 1',
  },
  {
    lesson_no: 2,
    contentype: 'problem',
    lesson_title: 'Lesson 2',
    lesson_points: 150,
    problem_id: courseProblemsData[0]._id, // Assuming you have IDs generated for CourseProblem data
  },
];

// Dummy data for Module model
const modulesData = [
  {
    module_title: 'Module 1',
    module_no: 1,
    module_total_score: 500,
    lessons: [lessonsData[0]._id, lessonsData[1]._id], // Assuming you have IDs generated for Lesson data
  },
];

// Dummy data for Course model
const coursesData = [
  {
    courseid: 'CS101',
    coursetags: ['Programming', 'Computer Science'],
    title: 'Introduction to Programming',
    description: 'This course introduces basic programming concepts.',
    modules: [modulesData[0]._id], // Assuming you have IDs generated for Module data
  },
];

// Dummy data for Assessments model
const assessmentsData = [
  {
    assignment_name: 'Assignment 1',
    total_time: 60,
    problems: [
      { problem_ref: courseProblemsData[0]._id, points: 50 },
      { problem_ref: courseProblemsData[1]._id, points: 75 },
    ],
  },
];
