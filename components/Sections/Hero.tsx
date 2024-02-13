"use client";
import Image from "next/image";
import { IHeroSectionProps } from "@/types/interface";
import IconsAndResume from "./IconsAndResume";
import { motion } from "framer-motion";

const Hero = ({
  socialLinks,
  mainImage,
  name,
  title,
  resume,
}: IHeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0 } },
  };

  const buttonAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="home"
      className="flex items-center justify-between gap-4 flex-col md:flex-row"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mb-2">
        <motion.h2
          className="gradient-text text-3xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-4xl my-2 font-bold"
          variants={textVariants}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-2xl text-muted-foreground mb-3"
          variants={textVariants}
        >
          {name}
        </motion.p>
        <motion.div variants={buttonAnimations} className="hidden md:block">
          <IconsAndResume socialLinks={socialLinks} resume={resume} />
        </motion.div>
      </div>

      {mainImage && (
        <motion.div variants={imageVariants} initial="hidden" animate="visible">
          <Image
            width={1000}
            height={1000}
            className="h-[450px] w-[400px] object-cover rounded-xl object-center"
            src={mainImage}
            alt="Author Image"
          />
        </motion.div>
      )}
      <motion.div variants={buttonAnimations} className="block md:hidden">
        <IconsAndResume socialLinks={socialLinks} resume={resume} />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
