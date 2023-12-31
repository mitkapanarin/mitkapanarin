import React from "react";
import TimelineCard from "../Card/TimelineCard";
import { IExperienceData } from "@/types/interface";

const Experience = ({ data }: { data: IExperienceData[] }) => {
  return (
    <section id="experience" className="pt-16 text-muted-foreground sm:text-lg">
      <div className="group">
        <h1 className="title-bottom-line cursor-pointer text-2xl">
          Experience
        </h1>
        <div className="flex justify-center">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {data?.map((item) => {
              return <TimelineCard key={item?._key} {...item} />;
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
