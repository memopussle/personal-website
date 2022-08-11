import React, { useState, useRef, useEffect } from "react";
import "./Nav.scss";
import { BiMenuAltLeft } from "react-icons/bi";
import { gsap } from "gsap";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
   setNavOpen(!navOpen)
    console.log(navOpen)
  }


  //GSAP
  const navSmallRef = useRef();
  const navFullRef = useRef();
  const navButtonRef = useRef();
  const menuRef = useRef();

  //animating after rendering
  useEffect(() => {
    gsap.from(navSmallRef.current, 0.5, {
      x: "-100%",
      ease: "Expo.easeInOut",
    });


     gsap.from(
       navFullRef.current,
       0.5,
       {
         delay: 1,
         opacity: 0,
         x: "-20",
         ease: 'Expo.easeInOut',
       },
       0.08
    );
    
     gsap.from(
       navButtonRef.current,
       0.5,
       {
         delay: 1.2,
         opacity: 0,
         x: "-20",
         ease: "Expo.easeInOut",
       },
       0.08
    );
     gsap.from(
      menuRef.current,
       0.5,
       {
         delay: 0.8,
         opacity: 0,
         x: "-20",
         ease: "Expo.easeInOut",
       },
       0.08
     );
  });

  return (
    <header>
      <div className="container flex space-between nav">
        <button
          className="transparent-button nav__menu"
          onClick={handleClick}
          ref={menuRef}
        >
          <BiMenuAltLeft size={40} />
        </button>

        <ul className="nav__medium" ref={navFullRef}>
          <li>
            <a href="#home" target="_blank" rel="noopener">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" target="_blank" rel="noopener">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" target="_blank" rel="noopener">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#contact" target="_blank" rel="noopener">
              CONTACT
            </a>
          </li>
        </ul>
        {navOpen === true && (
          <ul className="nav__small" ref={navSmallRef}>
            <li>
              <a href="#home" target="_blank" rel="noopener">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" target="_blank" rel="noopener">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#projects" target="_blank" rel="noopener">
                PROJECTS
              </a>
            </li>
            <li>
              <p>CONTACT</p>
            </li>
          </ul>
        )}

        <ul>
          <li>
            <button className="normal-button" ref={navButtonRef} onClick={() => window.location = 'mailto:xanhtham.cuc@gmail.com'}   rel="noreferrer"
                  target="_blank">
              CONTACT ME
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
