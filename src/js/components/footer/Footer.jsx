import linkedinImg from "../../../assets/img/linkedin.png";
import githubImg from "../../../assets/img/github.png";

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
};

const Footer = () => {
  return <MyFooter />;
};

export { Footer };
