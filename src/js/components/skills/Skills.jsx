import computerImg from '../../../assets/img/computer.png';
import uiuxImg from '../../../assets/img/interfaz-de-usuario.png';
import sofwareImg from '../../../assets/img/software.png';
import codingImg from '../../../assets/img/coding.png';
import frameworksImg from '../../../assets/img/frameworks.png';
import cvDoc from '../../../assets/docs/valeria-acuña_cv.pdf';

const MySkills = () => {
  return (
    <section className="skillsSection containerSkills" id="skills">
      <h1 className="titleMySkills">MY SKILLS</h1>
      <div className="skillsContent">
        <img className="computerImg" src={computerImg} alt="" />

        <div className="infoSkillsList">
          <ul className="skillsItems">
            <li className="skillsItem">
              <img className="logosSkills" src={uiuxImg} alt="" />
              <div className="skillsItemText">
                <p className="skillsTitle">UI / UX</p>
                <p>Figma</p>
              </div>
            </li>

            <li className="skillsItem">
              <img className="logosSkills" src={sofwareImg} alt="" />
              <div className="skillsItemText">
                <p className="skillsTitle">Software & Applications</p>
                <p>Node.js</p>
                <p>MongoDB</p>
              </div>
            </li>

            <li className="skillsItem">
              <img className="logosSkills" src={codingImg} alt="" />
              <div className="skillsItemText">
                <p className="skillsTitle">Programming Languajes</p>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>JavaScript</p>
              </div>
            </li>

            <li className="skillsItem">
              <img className="logosSkills" src={frameworksImg} alt="" />
              <div className="skillsItemText">
                <p className="skillsTitle">Frameworks & Libraries</p>
                <p>React.js</p>
                <p>StoryBook</p>
                <p>Prettier</p>
                <p>Next.js</p>
                <p>Eslint</p>
                <p>Chakra UI</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="cvSection">
        <p className="skillsTitle">Click to download my CV!</p>
        <a className="btn" href={cvDoc} download="Curriculum">
          CURRICULUM
        </a>
      </div>
    </section>
  );
};

const Skills = () => {
  return <MySkills />;
};

export { Skills };
