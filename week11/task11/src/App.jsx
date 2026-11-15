import StudentProfileCard from './StudentProfileCard';
import activityScreenshot from '../activity-screenshot.svg';

// Classmate details that were not supplied are left as a dash.
function App() {
  return (
    <main className="page">
      <header className="heading">
        <a href="../../index.html" className="back-link">← Week 11</a>
        <p className="eyebrow">WEB PROGRAMMING · TASK 11-A</p>
        <h1>Student Directory</h1>
        <p>Student profiles made with React components and props.</p>
      </header>

      <section className="profiles" aria-label="Student profiles">
        <StudentProfileCard
          name="Eric Munkhtulga Davaasuren"
          studentId="202637684"
          major="Computer Engineering"
          year={1}
          gpa={3.3}
        />
        <StudentProfileCard
          name="Abinash Lamichhane"
          studentId="202637724"
          major="Computer Engineering"
          year={1}
          gpa={4}
        />
        <StudentProfileCard
          name="Sudip Sah"
          studentId="202637610"
          major="Computer Engineering"
          year={1}
          gpa={4.45}
        />
      </section>

      <section className="courses" aria-labelledby="courses-title">
        <h2 id="courses-title">My Current Courses</h2>
        <ul>
          <li>Web Programming</li>
          <li>Database</li>
          <li>Discrete Mathematics</li>
          <li>College English 2</li>
          <li>Operating Systems</li>
        </ul>
      </section>
      <section className="activity-proof" aria-label="Activity code screenshot">
        <p className="activity-code"><strong>7684-BBB-6950</strong></p>
        <img
          src={activityScreenshot}
          alt="Week 11 Monday activity screenshot showing code 7684-BBB-6950 and 3 out of 3 correct answers"
          width="1250"
          height="611"
          loading="lazy"
        />
      </section>

    </main>
  );
}

export default App;
