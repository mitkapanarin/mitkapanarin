import React from "react";
import { PortableText } from "@portabletext/react";
import { nanoid } from "nanoid";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlForImage } from "@/sanity/lib/image";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ReactPortableText = ({ body }: any) => {
  const SampleImageComponent = ({ value, isInline }: any) => {
    const { width, height } = getImageDimensions(value);
    const imageUrl = urlForImage(value) || "";

    return (
      <div
        className="my-4"
        style={{
          display: isInline ? "inline-block" : "block",
        }}
      >
        <Image
          src={imageUrl as any}
          alt={value.alt || " "}
          width={width}
          height={height}
          quality={68}
          priority={false}
          loading="lazy"
          className="rounded-md"
        />
      </div>
    );
  };

  const TableBlock = ({ value }: any) => {
    const { caption, rows } = value || {};

    return (
      <Table className="w-full text-sm my-3 text-left">
        {/* Table caption */}
        {caption && <TableCaption>{caption}</TableCaption>}

        <TableHeader>
          <TableRow>
            {rows &&
              rows[0]?.cells?.map((cell: any, j: number) => (
                <TableHead key={nanoid()}>{cell}</TableHead>
              ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows &&
            rows
              .slice(1)
              ?.map((row: any, i: number) => (
                <TableRow key={nanoid()}>
                  {row?.cells?.map((cell: any, j: number) => (
                    <TableCell key={nanoid()}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
        </TableBody>
      </Table>
    );
  };

  // Custom link component
  const CustomLink = ({ text, value, ...x }: any) => {
    return (
      <a
        href={value?.href || "#"}
        target="_blank"
        className="text-primary underline cursor-pointer"
      >
        {text}
      </a>
    );
  };

  return (
    <PortableText
      value={body}
      components={{
        marks: {
          link: CustomLink,
          strong: ({ children }) => (
            <div className="text-lg font-bold text-sky-300 my-2">
              {children}
            </div>
          ),
        },
        list: {
          bullet: ({ children }) => <ul className="mt-lg">{children}</ul>,
          number: ({ children }) => <ol className="mt-lg">{children}</ol>,
        },
        listItem: {
          bullet: ({ children }: any) => {
            return (
              <li className="list-disc ml-8 my-1 text-muted-foreground">
                {children}
              </li>
            );
          },
          number: ({ children }: any) => {
            return (
              <li className="list-decimal ml-8 my-1 text-muted-foreground">
                {children}
              </li>
            );
          },
        },
        block: {
          // Big text
          h1: ({ children }) => (
            <div className="text-lg md:text-2xl lg:text-3xl my-2 text-primary">
              {children}
            </div>
          ),
          // Waring color
          h2: ({ children }) => (
            <div className="text-2xl text-red-400 my-2">{children}</div>
          ),
          // Success color
          h3: ({ children }) => (
            <div className="text-2xl text-green-400 my-2">{children}</div>
          ),
          normal: ({ children }) => (
            <div className="text-md font-normal text-muted-foreground">
              {children}
            </div>
          ),
        },
        types: {
          image: SampleImageComponent,
          table: TableBlock,
          lineBreak: () => <div className="my-3"></div>,
        },
      }}
    />
  );
};

export default ReactPortableText;
