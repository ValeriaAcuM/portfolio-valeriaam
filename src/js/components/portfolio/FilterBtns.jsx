const FilterBtns = ({ activeCategory, setActiveCategory }) => {
  const categories = ["All", "UI/UX", "Web Development", "BPM", "Content Creator"];
  return (
    <div className="filter-categories">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${
            activeCategory === category ? "active" : ""
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category === "All" ? "All Projects" : category}
        </button>
      ))}
    </div>
  );
};

export default FilterBtns;
