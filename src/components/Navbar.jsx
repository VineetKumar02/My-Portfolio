import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../css/navbar.css';
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);

        const pageScroll = window.scrollY;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollValue = (pageScroll / height) * 100;

        indicatorBar.style.width = scrollValue + "%";
      } else {
        setScrolled(false);
        indicatorBar.style.width = 0;
      }
    };

    const indicatorBar = document.querySelector(".scroll-indicator-bar");

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        <nav className={`navbar ${scrolled ? "bg-primary" : "bg-transparent"}`}>
          <div className='nav-links-container'>
            <Link
              to='/'
              onClick={() => { window.scrollTo(0, 0); }}
            >
              <img src={logo} alt='logo' />
              <p>
                Vineet Kumar &nbsp;
                <span> | Portfolio</span>
              </p>
            </Link>

            <ul>
              {navLinks.map((nav) => (
                <li key={nav.id} >
                  <a href={`#${nav.id}`} title={nav.title}> {nav.title}</a>
                </li>
              ))}
            </ul>

            <div className='toggler'>
              <img
                src={toggle ? close : menu}
                alt='menu'
                onClick={() => setToggle(!toggle)}
              />

              <div
                className={`${!toggle ? "hidden" : "flex"} 
            black-gradient mobile-nav-links-container`}
              >
                <ul>
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      onClick={() => { setToggle(!toggle); }}
                    >
                      <a href={`#${nav.id}`} title={nav.title}> {nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="scroll-indicator-container">
          <div className="scroll-indicator-bar"></div>
        </div>
      </header>
      <a id="top" href="#" title="Go to Top"> <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </>


  );
};

export default Navbar;
