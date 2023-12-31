import { IExperienceData } from "@/types/interface";
import React from "react";
import ReactPortableText from "../Text/ReactPortableText";

const TimelineCard = ({
  _key,
  companyName,
  currentlyEmployed,
  designation,
  endDate,
  startDate,
  body,
}: IExperienceData) => {
  return (
    <li className="mb-6 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <h3 className="text-xl font-semibold text-primary capitalize">
        {companyName}
      </h3>
      <h4 className="text-lg text-muted-foreground capitalize">
        {designation}
      </h4>
      <time className="mb-1 text-xs font-normal leading-none text-muted-foreground">
        {startDate} - {endDate ? endDate : currentlyEmployed ? "present" : ""}
      </time>
      <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        <ReactPortableText body={body} />
      </div>
    </li>
  );
};

export default TimelineCard;
