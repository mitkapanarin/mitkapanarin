import { ISocialLinksReferenceDocument } from "@/types/interface";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      description: "Your Job Title",
    }),
    defineField({
      name: "resume",
      title: "resume",
      type: "file",
      description: "Upload your resume",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Add your name here",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      description: "Add your image here",
      options: {
        hotspot: true,
      },
      // @ts-ignore
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "List of Social Media Links",
      type: "array",
      description: "Choose List of Social Media Links you want to display",
      validation: (Rule) => Rule.unique().error("Each Link must be unique"),
      // @ts-ignore
      of: [
        {
          type: "reference",
          to: { type: "socialLinks" },
          options: {
            filter: ({
              document,
            }: {
              document: ISocialLinksReferenceDocument;
            }) => {
              // console.log("documents list", document);
              const existingProjects = document.socialLinks
                .map((project) => project._ref)
                .filter(Boolean);
              return {
                filter: "!(_id in $existingProjects)",
                params: {
                  existingProjects,
                },
              };
            },
          },
        },
      ],
    }),
  ],
});
