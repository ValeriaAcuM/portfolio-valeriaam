import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-list">
          <Link
            activeClass="active"
            to="personal"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Valeria
          </Link>

          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Skills
          </Link>

          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
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
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

const NavbarMenu = () => {
  return <Navbar />;
};

export { NavbarMenu };
