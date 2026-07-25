import "./Header.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}

        <div className="header-logo">
          <h2>Veeresh S A</h2>
        </div>

        {/* Navigation */}

        <ul className={menuOpen ? "header-menu active" : "header-menu"}>

  <li>
    <Link
      to="home"
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      activeClass="active"
      onClick={closeMenu}
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      to="experience"
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      activeClass="active"
      onClick={closeMenu}
    >
      Experience
    </Link>
  </li>

  <li>
    <Link
      to="education"
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      activeClass="active"
      onClick={closeMenu}
    >
      Education
    </Link>
  </li>

  <li>
    <Link
      to="contact"
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      activeClass="active"
      onClick={closeMenu}
    >
      Contact
    </Link>
  </li>

</ul>

        {/* Mobile Menu */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Header;