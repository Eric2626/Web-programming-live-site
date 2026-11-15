// Projects I have made for Web Programming.
const base = 'https://eric2626.github.io/Web-programming-live-site/';
const github = 'https://github.com/Eric2626/Web-programming-live-site/';

const projects = [
  {
    id: 1,
    title: 'Style Your First Heading',
    description: 'My first CSS heading with a custom color, font size, and centered text.',
    techStack: ['HTML', 'CSS'],
    githubUrl: github + 'blob/main/week3/Task1_style%20your%20first%20heading.html',
    demoUrl: base + 'week3/Task1_style%20your%20first%20heading.html',
  },
  {
    id: 2,
    title: 'Book Search',
    description: 'A book search page that shows matching books using a book data API.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: github + 'blob/main/week7/book-search.html',
    demoUrl: base + 'week7/book-search.html',
  },
  {
    id: 3,
    title: 'Student Registration Form',
    description: 'An upgraded student registration form with clear input fields and form checks.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: github + 'blob/main/week8/upgraded%20registration.html',
    demoUrl: base + 'week8/upgraded%20registration.html',
  },
  {
    id: 4,
    title: 'Student Directory',
    description: 'A React page that displays three student cards with props and their course information.',
    techStack: ['React', 'CSS', 'JavaScript'],
    githubUrl: github + 'tree/main/week11/task11',
    demoUrl: base + 'week11/task11/live/',
  },
];

export default projects;
