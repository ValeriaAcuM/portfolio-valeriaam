import personalImage from '../../../assets/img/valeria_image.jpg';

const MyIntro = () => {
  return (
    <section className="mainInfo" id="personal">
      <div className="infoContent">
        <span className="greeting">Hi!</span>
        <span className="infoText">
          I am <span className="infoName">Valeria</span>
        </span>
        <p className="infoParagraph">
          Skilled Web Developer with a strong focus on creating visually
          captivating and user-friendly websites.
        </p>
      </div>
      <img className="personal_img" src={personalImage} alt="" />
    </section>
  );
};

const Intro = () => {
  return <MyIntro />;
};

export { Intro };
