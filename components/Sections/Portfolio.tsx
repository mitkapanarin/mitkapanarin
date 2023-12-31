import React from "react";
import ProjectCard from "../Card/ProjectCard";
import { IProject } from "@/types/interface";

const Portfolio = ({ projects }: { projects: IProject[] }) => {
  return (
    <section id="portfolio" className="pt-14 text-muted-foreground sm:text-lg">
      <div className="group">
        <h1 className="title-bottom-line cursor-pointer text-2xl">Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 justify-center">
          {projects?.map((item) => <ProjectCard key={item?._key} {...item} />)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
