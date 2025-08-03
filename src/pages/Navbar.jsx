import "./Navbar.css";
import { Link } from "react-scroll";

import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="logo">
        João Victor.<span className="animate" id="animate_logo_timer"></span>
      </Link>

      <div
        className="menu-btn"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <IoMdMenu
          style={showMenu ? { display: "none" } : { display: "block" }}
        />
        <span className="animate animate_navLinks_timer"></span>
      </div>

      <div
        className="menu-btn"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <IoCloseSharp
          style={showMenu ? { display: "block" } : { display: "none" }}
        />
        <span className="animate animate_navLinks_timer"></span>
      </div>

      <nav className="navbar">
        <Link
          to="home"
          className="links"
          activeClass="active show-animate"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          Home
        </Link>
        <Link
          to="about"
          className="links"
          activeClass="active show-animate"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          About-Me
        </Link>
        <Link
          to="education"
          className="links"
          activeClass="active show-animate"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          My Education
        </Link>
        <Link
          to="skills"
          className="links"
          activeClass="active show-animate"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          My Skills
        </Link>
        <Link
          to="contact"
          className="links"
          activeClass="active show-animate"
          spy={true}
          smooth={true}
          offset={-8}
          duration={500}
        >
          Contact Me
        </Link>
        <span className="animate animate_navLinks_timer"></span>
      </nav>

      {/* Mobile part of the Menu */}

      {showMenu ? (
        <nav
          className="navbar"
          style={showMenu ? { display: "block" } : { display: "none" }}
        >
          <Link
            to="home"
            className="links"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            className="links"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            About-Me
          </Link>
          <Link
            to="education"
            className="links"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            My Education
          </Link>
          <Link
            to="skills"
            className="links"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            My Skills
          </Link>
          <Link
            to="contact"
            className="links"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-8}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Contact Me
          </Link>
          <span className="animate animate_navLinks_timer"></span>
        </nav>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Navbar;
