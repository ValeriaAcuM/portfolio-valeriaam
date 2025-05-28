import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const MyIntroduction = () => {
  return (
    <section className="header" id="personal">
      <div className="info-content">
        <span className="name">Valeria Acuña Monge</span>
        <span className="first-occupation">
          UI/UX DESIGNER
          <span className="sec-occupation">& DEVELOPER</span>
        </span>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/valeria-acuña-monge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={50} color="#000" />
            <span>Linkedin</span>
          </a>
          <a href="mailto:valeacumonge@gmail.com">
            <SiGmail size={50} color="#000" />
            <span>Gmail</span>
          </a>
          <a
            href="https://github.com/ValeriaAcuM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={50} color="#000" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const Header = () => {
  return <MyIntroduction />;
};

export { Header };
