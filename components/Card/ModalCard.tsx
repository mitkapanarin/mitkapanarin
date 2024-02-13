import * as React from "react";
import { IProject } from "@/types/interface";
import ModalComp from "../Modal/Modal";
import ProjectCard from "./ProjectCard";

const ModalCard: React.FC<IProject> = ({
  _key,
  description,
  mainImage,
  title,
  body,
  projectLinksList,
  indexForAnimation,
  estimatedWordCount,
  numberOfCharacters,
}) => {
  return (
    <ModalComp
      title={title}
      description={description}
      mainImage={mainImage}
      body={body}
      projectLinksList={projectLinksList}
      indexForAnimation={indexForAnimation}
      estimatedWordCount={estimatedWordCount}
      numberOfCharacters={numberOfCharacters}
      trigger={
        <ProjectCard
          {...{
            _key,
            description,
            mainImage,
            projectLinksList,
            title,
            body,
            estimatedWordCount,
            numberOfCharacters,
          }}
        />
      }
    />
  );
};

export default ModalCard;
