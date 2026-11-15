import { useState } from 'react';
import projects from './data/projects';
import FilterBar from './components/FilterBar';
import ProjectList from './components/ProjectList';

const technologies = ['All', ...new Set(projects.flatMap((project) => project.techStack))];

function App() {
  const [selectedTechnology, setSelectedTechnology] = useState('All');

  const visibleProjects = projects.filter((project) => (
    selectedTechnology === 'All' || project.techStack.includes(selectedTechnology)
  ));

  return (
    <main className="page">
      <div className="gallery-header">
        <a className="back-link" href="../index.html">← Week 11</a>
        <h1>Portfolio Gallery</h1>
        <p>My Web Programming projects. Select a technology to filter the cards.</p>
      </div>

      <FilterBar
        technologies={technologies}
        selectedTechnology={selectedTechnology}
        onChange={setSelectedTechnology}
      />

      <p className="result-count" aria-live="polite">
        Showing {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'}
      </p>
      <ProjectList projects={visibleProjects} />
      <footer>Eric · Web Programming · Week 11</footer>
    </main>
  );
}

export default App;
