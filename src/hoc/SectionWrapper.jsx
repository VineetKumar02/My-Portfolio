import { motion } from "framer-motion";


import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {


    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        // viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        viewport={{ once: true, amount: 0.1 }}
        className="outermost-container"
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;