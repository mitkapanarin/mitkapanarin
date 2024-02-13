"use client";
import { IAboutSection } from "@/types/interface";
import ReactPortableText from "../Text/ReactPortableText";
import { motion } from "framer-motion";

const About = ({ about }: { about: IAboutSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <motion.section
      id="about"
      className="pt-20 text-muted-foreground sm:text-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="group">
        <motion.h1
          className="title-bottom-line cursor-pointer text-2xl"
          // variants={titleVariants}
          initial={titleVariants.hidden}
          whileInView={titleVariants.visible}
        >
          About me
        </motion.h1>
        <motion.div
          // variants={textVariants}
          initial={textVariants.hidden}
          whileInView={textVariants.visible}
        >
          <ReactPortableText body={about?.body} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
