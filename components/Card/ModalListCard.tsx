import { IProject } from "@/types/interface";
import React from "react";
import ModalComp from "../Modal/Modal";
import CardList from "./CardList";

const ModalListCard: React.FC<IProject> = ({
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
        <CardList
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

export default ModalListCard;
