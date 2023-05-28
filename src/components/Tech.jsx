import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

import "../css/tech.css";


const Tech = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Some of my skills</p>
        <h2 className="sectionHeadText">Technologies.</h2>
      </motion.div>

      <div className='skills-container'>
        {technologies.map((technology) => (
          <div className="skill-box" key={technology.name}>
            <img src={technology.icon} alt={technology.name} title={technology.name} loading="lazy"/>
            <p>{technology.name}</p>
          </div>
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Tech, "skill");
