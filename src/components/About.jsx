import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import "../css/about.css";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, text, bgColor }) => (
  <Tilt>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    >
      <div
        className='card'
        style={{ background: bgColor }}
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className="icon"><img src={icon} alt={title} loading="lazy"/></div>
        <div className="content">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='text'
      >
        Throughout my academic journey, I have gained a strong understanding of programming languages,
        including C++, Python, Java along with proficiency in web development technologies. I also have
        hands on experience with mobile app development using Flutter. I am well-equipped to tackle the
        challenges of software development. I'm a quick learner and Being a technology enthusiast, I am always eager to
        learn and grow, ensuring that I stay up to date with the latest industry trends and advancements.
      </motion.p>

      <div className='cards-container'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
