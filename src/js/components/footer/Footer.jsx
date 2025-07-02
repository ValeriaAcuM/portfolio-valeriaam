import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

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
            <li>UX/UI</li>
            <li>Business Process Management</li>
            <li>Canva and Advertising Design Strategies for Social Media</li>
            <li>Intermediate Python</li>
          </ul>
          <p className="institution-name">CETAV</p>
          <ul>
            <li>Introduction to Python</li>
          </ul>
        </div>

        <div className="footer-content">
          <p className="footer-titles">HARD SKILLS</p>
          <ul>
            <li>Figma & Miro</li>
            <li>Canva</li>
            <li>User Research</li>
            <li>Empathy Maps</li>
            <li>User Flow Diagrams</li>
            <li>Wireframing & Prototyping</li>
            <li>Usabiliity Testing</li>
            <li>HTML5 & CSS3</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="footer-content">
          <p className="footer-titles">SOFT SKILLS</p>
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
      </section>
    </footer>
  );
};

const Footer = () => {
  return <MyFooter />;
};

export { Footer };
