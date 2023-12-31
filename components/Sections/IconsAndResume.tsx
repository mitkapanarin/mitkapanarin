import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ISocialLinks } from "@/types/interface";
import HeroSectionIcons from "../Icons/HeroSectionIcons";

const IconsAndResume = ({
  socialLinks,
  resume,
}: {
  socialLinks: ISocialLinks[];
  resume: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start">
      <div className="flex gap-1">
        {socialLinks?.map((item: ISocialLinks) => (
          <HeroSectionIcons key={item?._id} {...item} />
        ))}
      </div>

      {resume && (
        <Link href={resume} target="_blank">
          <Button variant="default" size="sm" className="mt-3">
            View Resume
          </Button>
        </Link>
      )}
    </div>
  );
};

export default IconsAndResume;
