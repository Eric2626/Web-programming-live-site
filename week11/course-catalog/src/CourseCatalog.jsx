import CourseCard from './CourseCard';
import { courses } from './data';

function CourseCatalog() {
  return (
    <section className="course-list" aria-label="Course catalog">
      {courses.map(course => (
        <CourseCard
          key={course.id}
          title={course.title}
          instructor={course.instructor}
          credits={course.credits}
          required={course.required}
        />
      ))}
    </section>
  );
}

export default CourseCatalog;
