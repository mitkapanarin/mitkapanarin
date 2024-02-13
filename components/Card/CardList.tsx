import { IProject } from "@/types/interface";
import Image from "next/image";
import React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { textLimit } from "../Text/TextEdit";

const CardList: React.FC<IProject> = ({ description, mainImage, title }) => {
  return (
    <Card className="cursor-pointer border-none flex gap-3 transition-transform transform hover:scale-105">
      <Image
        src={mainImage}
        width={400}
        height={400}
        className="w-[80px] h-[70px] object-cover rounded-md"
        alt="project image"
      />
      <div className="">
        <CardTitle className="text-md">{textLimit(title, 30)}</CardTitle>
        <CardDescription>{textLimit(description, 70)}</CardDescription>
      </div>
    </Card>
  );
};

export default CardList;
