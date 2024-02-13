import * as React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IProject } from "@/types/interface";
import Image from "next/image";
import { textLimit } from "../Text/TextEdit";

const ProjectCard: React.FC<IProject> = ({ description, mainImage, title }) => {
  return (
    <Card className="cursor-pointer border-none transition-transform transform hover:scale-105">
      <Image
        src={mainImage}
        alt="alt text"
        width={400}
        height={400}
        className="w-full h-[180px] object-cover rounded-md"
      />
      <CardHeader className="px-1 py-4 flex flex-col justify-between">
        <div className="">
          <CardTitle className="text-md">{textLimit(title, 30)}</CardTitle>
          <CardDescription>{textLimit(description, 70)}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
