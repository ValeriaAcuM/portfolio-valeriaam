import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const MyIntroduction = () => {
  return (
    <header id="personal">
      <div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/valeria-acuña-monge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={50} color="#fff" />
            <span>Linkedin</span>
          </a>
          <a href="mailto:valeacumonge@gmail.com">
            <SiGmail size={50} color="#fff" />
            <span>Gmail</span>
          </a>
          <a
            href="https://github.com/ValeriaAcuM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={50} color="#fff" />
            <span>GitHub</span>
          </a>
        </div>
        <p className="name">Valeria Acuña Monge</p>
      </div>

      <div>
        <p className="first-occupation">UI/UX DESIGNER</p>
        <p className="sec-occupation">& DEVELOPER</p>
      </div>
    </header>
  );
};

const Header = () => {
  return <MyIntroduction />;
};

export { Header };
