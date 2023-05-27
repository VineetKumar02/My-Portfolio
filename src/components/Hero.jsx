import { motion } from "framer-motion";

import "../css/hero.css";

import React, { useEffect } from 'react';
import Typed from 'typed.js';

import headerImg from "../assets/images/header-img.svg";


// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {

  useEffect(() => {
    const options = {
      strings: ['coder.', 'developer.', 'designer.'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    };

    const typedText = new Typed('.multiText', options);

    return () => {
      typedText.destroy();
    };
  }, []);


  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/path/to/your/cv.pdf';

    link.setAttribute('download', 'cv.pdf');
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <>
      <img src={headerImg} alt="Astronanut" className="astronanut" />

      <div className="hero-container">

        <div className="links">
          <a href="https://www.linkedin.com/in/vineet-kumar-gupta-2833ab196/" target="_blank" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://www.instagram.com/_.vini._02_/" target="_blank" title="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://github.com/VineetKumar02" target="_blank" title="Github"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://twitter.com/Vineethero02" target="_blank" title="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.facebook.com/VineetKumar02/" target="_blank" title="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
        </div>

        <div className='design'>
          <div className='circle blue-color' />
          <div className='line blue-gradient' />
        </div>

        <div>

          <span className="topline">./HelloWorld.exe</span>

          <h1 className="heroHeadText">
            Hi, I'm <span className='blue-text'>Vineet.</span>
          </h1>

          <h2 className="text-cursor"><span className="multiText"></span></h2>

          <p className="heroSubText">
            A hardworking college student with a motivated attitude, <br></br>
            curious to solve real life problems with my technical skills.
          </p>

          <button className="button" onClick={handleDownloadCV}>
            <span className="button__text">Download CV</span>
            <span className="icon-container">
              <FontAwesomeIcon icon={faDownload} className="icon" />
            </span>
          </button>

        </div>


        <div className='scroll-indicator'>
          <a href='#about' title="Scroll Down">
            <div className='outer'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='inner'
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
