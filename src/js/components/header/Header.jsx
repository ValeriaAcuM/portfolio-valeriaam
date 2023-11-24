import { useState } from "react";
import { Link } from "react-scroll";
import menuImage from "../../../assets/img/menu.png"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="Header">
      <nav className="navbar">
        <div className="navElementsDesktop">
          <Link
            activeClass="active"
            to="personal"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="navListDesktopItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            className="navListDesktopItem"
          >
            Curriculum
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="navListDesktopItem"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="navListDesktopItem"
          >
            Contact
          </Link>
        </div>

        <img
          className="mobMenu"
          src={menuImage}
          alt="menu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="personal"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            className="listItem"
          >
            Curriculum
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

const Header = () => {
  return <Navbar />;
};

export { Header };
