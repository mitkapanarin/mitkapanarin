import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IProject } from "@/types/interface";
import Image from "next/image";
import { LuGithub, LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";
import { textLimit } from "../Text/TextEdit";

const ProjectCard: React.FC<IProject> = ({
  deployment,
  description,
  github,
  mainImage,
  title,
}) => {
  return (
    <Card className="cursor-pointer">
      <Image
        src={mainImage}
        alt="alt text"
        width={400}
        height={400}
        className="w-full h-[220px] object-cover rounded-t-md"
      />
      <CardHeader className="px-4 py-2 flex flex-col h-[130px] justify-between">
        <div className="">
          <CardTitle className="text-md">{textLimit(title, 30)}</CardTitle>
          <CardDescription>{textLimit(description, 70)}</CardDescription>
        </div>
        <div className="">
          {github && (
            <Link href={github} target="_blank">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground px-2 py-0"
              >
                <LuGithub className="cursor-pointer w-6 h-6" />
              </Button>
            </Link>
          )}
          {deployment && (
            <Link href={deployment} target="_blank">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground px-2 py-0"
              >
                <LuArrowUpRight className="cursor-pointer w-6 h-6" />
              </Button>
            </Link>
          )}
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
