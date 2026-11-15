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
    title: 'Memory Match — Neon Arcade',
    description: 'A memory card game made with my team. Players can practice and try timed challenges.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: github + 'tree/main/teamproject',
    demoUrl: base + 'teamproject/index.html',
  },
];

export default projects;
