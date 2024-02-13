"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import ReactPortableText from "../Text/ReactPortableText";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IProjectLinksList } from "@/types/interface";
import Link from "next/link";
import { motion } from "framer-motion";

const Modal = ({
  trigger,
  title,
  description,
  mainImage,
  body,
  projectLinksList,
  indexForAnimation = 0,
  estimatedWordCount,
  numberOfCharacters,
}: {
  trigger: React.ReactNode;
  title: string;
  description: string;
  mainImage: string;
  body: any[];
  indexForAnimation?: number;
  projectLinksList: IProjectLinksList[];
  estimatedWordCount: number;
  numberOfCharacters: number;
}) => {
  const cardVariants = {
    hidden: {
      x: 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const logic = () => {
    if (+estimatedWordCount <= 10) {
      return `h-[20px]`;
    } else if (estimatedWordCount <= 50) {
      return `h-[${estimatedWordCount}px]`;
    } else {
      return "h-60";
    }
  };

  return (
    <motion.div
      whileInView={{
        ...cardVariants.visible,
        transition: {
          ...cardVariants.visible.transition,
          delay: indexForAnimation * 0.15,
        },
      }}
      initial={cardVariants.hidden}
    >
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[475px]">
          <DialogHeader>
            <DialogTitle className="text-xl">{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Image src={mainImage} alt="" width={1000} height={1000} />
            <DialogDescription className="text-md">
              {body && (
                <ScrollArea className={`${logic()} w-full px-2 relative`}>
                  <ReactPortableText body={body} />
                </ScrollArea>
              )}
            </DialogDescription>
          </div>
          <DialogFooter className="">
            {projectLinksList !== undefined &&
              projectLinksList
                .map((item: IProjectLinksList, index) => (
                  <Link href={item?.link} target="_blank" key={item?._key}>
                    {index === 0 ? (
                      <Button
                        variant="default"
                        type="submit"
                        size="sm"
                        className="focus-visible:outline-none outline-none border-none"
                      >
                        {item?.linkType}
                      </Button>
                    ) : (
                      <Button
                        variant="link"
                        type="submit"
                        size="sm"
                        className="focus-visible:outline-none outline-none border-none"
                      >
                        {item?.linkType}
                      </Button>
                    )}
                  </Link>
                ))
                ?.reverse()}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default Modal;
