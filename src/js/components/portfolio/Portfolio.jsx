const MyPortfolio = () => {
  return (
    <section className="portfolioSection" id="portfolio">
      <div className="portfolioContent">
        <h2 className="titlePortfolio">PORTFOLIO</h2>
        <p>
          My primary objective is to seamlessly integrate into your business,
          channeling my passion for design into the creation of a compelling
          website. By translating your design concepts into a functional and
          aesthetically pleasing online presence, I aim to contribute
          significantly to your companys success, fostering a positive impact
          and delivering tangible benefits.
        </p>
      </div>

      <div className="projectsSection">
        <div className="container work-wrap">
          <img
            className="imgProject"
            src="../../../assets/img/cetav.jpg"
            alt=""
          />
          <div className="infoProjects cetav">
            <p className="nameProject">CETAV WebPage</p>
            <div>
              <span className="rolTag">Web Developer</span>
              <span className="techInfo">
                Next.js, Figma, ChakraUI & StoryBook
              </span>
            </div>
            <div className="textProjects">
              <p>Main webpage for CETAV - La Libertad.</p>
              <a
                className="linkProjects"
                href="https://lalibertad-cetav.vercel.app/"
              >
                https://lalibertad-cetav.vercel.app/
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="projectsSection">
        <div className="container work-wrap">
          <img
            className="imgProject"
            src="../../../assets/img/plants.jpg"
            alt=""
          />
          <div className="infoProjects">
            <p className="nameProject">The perfect plant for your App</p>
            <div>
              <span className="rolTag">Web Developer</span>
              <span className="techInfo">HTML, CSS, JavaScript, Webpack</span>
            </div>
            <div className="textProjects">
              <p>
                The objective of the development of this site is to make plant
                recommendations based on the users answers in a form.
              </p>
              <a
                className="linkProjects"
                href="https://github.com/BMA1656/t3-c4.git"
              >
                https://github.com/BMA1656/t3-c4.git
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="projectsSection">
        <div className="container work-wrap">
          <img
            className="imgProject"
            src="../../../assets/img/dadJokes.jpg"
            alt=""
          />
          <div className="infoProjects">
            <p className="nameProject">Store Dad Jokes</p>
            <div>
              <span className="rolTag">Web Developer</span>
              <span className="techInfo">HTML, CSS, JavaScript</span>
            </div>
            <div className="textProjects">
              <p>
                The objective of this site is to create a product store with
                jokes, developing a product page for objects with some printed
                joke and a cart where customers can add and remove products
                before purchase.
              </p>
              <a
                className="linkProjects"
                href="https://github.com/ValeriaAcuM/store-dadJokes.git"
              >
                https://github.com/ValeriaAcuM/store-dadJokes.git
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="projectsSection">
        <div className="container work-wrap">
          <img
            className="imgProject"
            src="../../../assets/img/silvestre.jpg"
            alt=""
          />
          <div className="infoProjects restaurant">
            <p className="nameProject">The Restaurant</p>
            <div>
              <span className="rolTag">UI/UX</span>
              <span className="techInfo">Figma</span>
            </div>
            <div className="textProjects">
              <p>
                Designing and developing a website from the ground up, I craft
                an engaging and functional interface that mirrors the brand
                identity while optimizing the user experience.
              </p>
              <a
                className="linkProjects"
                href="https://www.figma.com/file/mOCCZFsvtgPsagK9lyARmA/Silvestre-Project?type=design&node-id=306%3A299&mode=design&t=TAdAiJAGoZKm0Tlm-1"
              >
                https://www.figma.com/file/mOCCZFsvtgPsagK9lyARmA/Silvestre-Project?type=design&node-id=306%3A299&mode=design&t=TAdAiJAGoZKm0Tlm-1
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="projectsSection">
        <div className="container work-wrap">
          <img
            className="imgProject"
            src="../../../assets/img/greenPlace.jpg"
            alt=""
          />
          <div className="infoProjects">
            <p className="nameProject">Green Place</p>
            <div>
              <span className="rolTag">Web developer - UI/UX</span>
              <span className="techInfo">React, Figma, Vite</span>
            </div>
            <div className="textProjects">
              <p>
                Designing and developing a social network from the ground up, I
                aim to create a platform where users can seamlessly interact in
                an intuitive manner, complemented by an appealing interface.
              </p>
              <a
                className="linkProjects"
                href="https://www.figma.com/file/NJkLQ3Qa16lf5yX9Xml2n0/Green-Place?type=design&node-id=0%3A1&mode=design&t=hIgHfR0iqxplpsSE-1"
              >
                https://www.figma.com/file/NJkLQ3Qa16lf5yX9Xml2n0/Green-Place?type=design&node-id=0%3A1&mode=design&t=hIgHfR0iqxplpsSE-1
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return <MyPortfolio />;
};

export { Portfolio };
