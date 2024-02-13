"use client";
import React from "react";
import TimelineCard from "../Card/TimelineCard";
import { IExperienceData } from "@/types/interface";
import { motion } from "framer-motion";

const Experience = ({ data }: { data: IExperienceData[] }) => {
  const cardVariants = {
    hidden: {
      x: 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="pt-16 text-muted-foreground sm:text-lg">
      <div className="group">
        <h1 className="title-bottom-line cursor-pointer text-2xl">
          Experience
        </h1>
        <div className="flex justify-center">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {data?.map((item, index) => (
              <motion.li
                key={item?._key}
                whileInView={{
                  ...cardVariants.visible,
                  transition: {
                    ...cardVariants.visible.transition,
                    delay: index * 0.15,
                  },
                }}
                initial={cardVariants.hidden}
              >
                <TimelineCard {...item} />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
