function FilterBar({ technologies, selectedTechnology, onChange }) {
  return (
    <nav className="filter-bar" aria-label="Filter projects by technology">
      {technologies.map((technology) => (
        <button
          type="button"
          key={technology}
          className={selectedTechnology === technology ? 'filter-button active' : 'filter-button'}
          aria-pressed={selectedTechnology === technology}
          onClick={() => onChange(technology)}
        >
          {technology}
        </button>
      ))}
    </nav>
  );
}

export default FilterBar;
