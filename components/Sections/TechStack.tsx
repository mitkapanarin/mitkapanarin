"use client";
import { ITechStackSingleItem } from "@/types/interface";
import TooltipComponent from "../Tooltip/TooltipComponent";
import Image from "next/image";
import { TechStackEnum } from "@/types/enum";
import { motion } from "framer-motion";

const TechStack = ({ tech }: { tech: ITechStackSingleItem[] }) => {
  const stacks = Object.values(TechStackEnum).map((stack) => ({
    [stack.toLowerCase()]: tech?.filter((item) => item?.stack === stack),
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const stackVariants = {
    hidden: {
      x: 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="#about"
      className="group"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="title-bottom-line mt-14 cursor-pointer text-2xl">
        Tech Stack
      </h1>

      {stacks?.length > 0 &&
        stacks?.map((stack, index) => {
          const stackName: String = Object.keys(stack)[0];
          const stackList = stack[stackName as keyof typeof stack] as any;
          if (stackList.length == 0) return null;
          return (
            <motion.div key={index} className="flex flex-col gap-3 mb-4">
              <h1 className="text-lg uppercase">{stackName}</h1>
              <div className="flex flex-wrap gap-2">
                {stackList.length > 0 &&
                  stackList.map(
                    (item: ITechStackSingleItem, indexNumber: number) => (
                      <motion.div
                        key={item?._id}
                        whileInView={{
                          ...stackVariants.visible,
                          transition: {
                            ...stackVariants.visible.transition,
                            delay: indexNumber * 0.09,
                          },
                        }}
                        initial={stackVariants.hidden}
                      >
                        <TooltipComponent
                          label={item?.label}
                          item={
                            <Image
                              className="cursor-pointer"
                              width={45}
                              height={45}
                              src={item?.icon}
                              alt={item?.label}
                            />
                          }
                        />
                      </motion.div>
                    )
                  )}
              </div>
            </motion.div>
          );
        })}
    </motion.section>
  );
};

export default TechStack;
