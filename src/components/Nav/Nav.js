import React, { useState } from "react";
import "./Nav.scss";
import { BiMenuAltLeft } from "react-icons/bi";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
   setNavOpen(!navOpen)
    console.log(navOpen)
  }

  return (
    <header>
      <div className="container flex space-between nav">
        <button className="transparent-button nav__menu" onClick={handleClick}>
          <BiMenuAltLeft size={40} />
        </button>

        <ul className="nav__medium">
          <li>
            <p onClick={() => window.location.replace("/#home")}>Home</p>
          </li>
          <li>
            <p onClick={() => window.location.replace("/#about")}>About</p>
          </li>
          <li>
            <p onClick={() => window.location.replace("/#projects")}>
              Projects
            </p>
          </li>
          <li>
            <p onClick={() => window.location.replace("/#contact")}>Contact</p>
          </li>
        </ul>
        {navOpen === true && (
          <ul className="nav__small">
            <li>
              <p onClick={() => window.location.replace("/#home")}>Home</p>
            </li>
            <li>
              <p onClick={() => window.location.replace("/#about")}>About</p>
            </li>
            <li>
              <p onClick={() => window.location.replace("/#projects")}>
                Projects
              </p>
            </li>
            <li>
              <p onClick={() => window.location.replace("/#contact")}>
                Contact
              </p>
            </li>
          </ul>
        )}

        <ul>
          <li>
            <button className="normal-button">CONTACT ME</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
