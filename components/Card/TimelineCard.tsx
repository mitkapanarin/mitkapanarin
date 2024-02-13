import { IExperienceData } from "@/types/interface";
import React from "react";
import ReactPortableText from "../Text/ReactPortableText";
import dayjs from "dayjs";

const TimelineCard = ({
  companyName,
  currentlyEmployed,
  designation,
  endDate,
  startDate,
  body,
}: IExperienceData) => {
  return (
    <div className="mb-6 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <h3 className="text-xl font-semibold text-primary capitalize">
        {companyName}
      </h3>
      <h4 className="text-lg text-muted-foreground capitalize">
        {designation}
      </h4>
      <time className="mb-1 text-xs font-normal leading-none text-muted-foreground">
        {dayjs(startDate).format("DD MMM, YYYY")} -{" "}
        {endDate
          ? dayjs(endDate).format("DD MMM, YYYY")
          : currentlyEmployed && "present"}
      </time>
      <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        <ReactPortableText body={body} />
      </div>
    </div>
  );
};

export default TimelineCard;
