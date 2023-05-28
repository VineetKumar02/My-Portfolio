import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import "../css/works.css"


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("down", "spring", index * 0.5, 0.75)}>
      <Tilt
        className='work-card'
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className='image-container'>
          <img src={image} alt='project_image' className="project-img" loading="lazy"/>

          <div className='github-icon'>
            <div
              className='background black-gradient'
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img src={github} alt='source code' loading="lazy"/>
            </div>
          </div>
        </div>

        <div className='text-container'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>

        <div className='tech-container'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              style={{ color: tag.color }}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">My work</p>
        <h2 className="sectionHeadText">Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='sectionSubSubText'
      >
        Following projects showcases my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories and live demos in it. It reflects my
        ability to solve complex problems, work with different technologies,
        and manage projects effectively.
      </motion.p>


      <div className='work-cards-container'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
