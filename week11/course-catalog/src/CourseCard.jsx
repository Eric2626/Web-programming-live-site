function CourseCard({ title, instructor, credits, required }) {
  return (
    <article className="course-card">
      <span className={required ? 'badge required' : 'badge elective'}>
        {required ? '필수' : '선택'}
      </span>
      <h2>{title}</h2>
      <p className="instructor">{instructor}</p>
      <p className="credits">{credits} {credits === 1 ? 'credit' : 'credits'}</p>
    </article>
  );
}

export default CourseCard;
