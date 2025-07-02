import resumeCvDocument from "../../../assets/documents/resume-valeria-acuna-monge.pdf";

const ResumeDoc = () => {
  return (
    <section id="resume">
      <div className="resume-container">
        <div className="resume-text">
          <h3>Click here to see and download my resume.</h3>
          <p>Available in English and Spanish</p>
        </div>
        <a
          className="resume-anchor"
          href={resumeCvDocument}
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </a>
      </div>
    </section>
  );
};

const Resume = () => {
  return <ResumeDoc />;
};

export { Resume };
