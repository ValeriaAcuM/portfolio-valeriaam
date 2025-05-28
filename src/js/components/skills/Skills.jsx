import cvDoc from "../../../assets/docs/valeria-acuña_cv.pdf";

const MySkills = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <div className="skills-column">
          <h1 className="title-skills">HARD SKILLS</h1>
          <ul>
            <li>Figma</li>
            <li>Miro</li>
            <li>Canva</li>
            <li>User Research</li>
            <li>Empathy Maps</li>
            <li>User Personas</li>
            <li>User Flow Diagrams</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Usabiliity Testing</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skills-column">
          <h2 className="title-skills">SOFT SKILLS</h2>
          <ul>
            <li>Fast Learning</li>
            <li>Effective Communication</li>
            <li>Teamwork</li>
            <li>Problem-Solving</li>
            <li>Aaptability</li>
            <li>Creativity</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>

      <div className="resume-container">
        <div className="resume-text">
          <h3>Click here to see and download my resume.</h3>
          <p>Available in English and Spanish</p>
        </div>
        <a
          className="resume-btn"
          href={cvDoc}
          target="_blank"
          rel="noopener noreferrer"
          /* download="Curriculum" */
        >
          RESUME
        </a>
      </div>
    </section>
  );
};

const Skills = () => {
  return <MySkills />;
};

export { Skills };
