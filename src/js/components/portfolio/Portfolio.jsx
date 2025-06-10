import { useState } from "react";
import projects from "../../data/dataProjects";
import ProjectsList from "./ProjectsList";
import FilterBtns from "./FilterBtns";

const MyPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-header">
        <h5>PORTFOLIO</h5>
        <div>
          <FilterBtns
          className
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        </div>
      </div>
      <ProjectsList projects={projects} activeCategory={activeCategory} />
    </section>
  );
};

const Portfolio = () => {
  return <MyPortfolio />;
};

export { Portfolio };
