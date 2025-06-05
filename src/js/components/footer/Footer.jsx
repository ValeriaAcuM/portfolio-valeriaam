/* import linkedinImg from '../../../assets/img/linkedin.png';
import githubImg from '../../../assets/img/github.png';

const MyFooter = () => {
  return (
    <section className="footer">
      <div className="footerContent">
        <h4>SOCIAL MEDIA</h4>
        <a href="https://www.linkedin.com/in/valeria-acuña-monge-98424a28a">
          <img className="socialMedia" src={linkedinImg} alt="Linkedin" />
        </a>

        <a href="https://github.com/ValeriaAcuM">
          <img className="socialMedia" src={githubImg} alt="Github" />
        </a>
        <p>Copyright © 2023 Valeria Acuña. </p>
      </div>
    </section>
  );
}; */

import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const MyFooter = () => {
  return (
    <footer>
      <h6>VALERIA ACUÑA MONGE</h6>
      <section className="footer-section">
        <div className="footer-content">
          <p className="footer-titles">Contact</p>
          <ul>
            <li>
              <MdEmail />
              valeacumonge@gmail.com
            </li>
            <li>
              <MdLocationOn />
              Cartago, Costa Rica
            </li>
          </ul>
        </div>

        <div className="footer-content">
          <p className="footer-titles">Education</p>
          <ul>
            <li>
              <FaGraduationCap />
              Web Design and Development Technician
            </li>
          </ul>
          <p>Centro de Tecnología y Artes Visuales (CETAV)</p>
        </div>

        <div className="footer-content">
          <p className="footer-titles">Certifications</p>
          <p className="institution-name">Rocket Girls</p>
          <ul>
            <li>
              <FaCertificate />
              UX for Beginners
            </li>
            <li>
              <FaCertificate />
              Canva and Advertising Design Strategies for Social Media
            </li>
            <li>
              <FaCertificate />
              Intermediate Python
            </li>
          </ul>
          <p className="institution-name">CETAV</p>
          <ul>
            <li>
              <FaCertificate />
              Introduction to Python
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

const Footer = () => {
  return <MyFooter />;
};

export { Footer };
