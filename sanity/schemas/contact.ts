import { ISocialLinksReferenceDocument } from "@/types/interface";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "The title of the page, please don't change this",
      readOnly: true,
      initialValue: "Contact Section",
    }),
    defineField({
      name: "copyright",
      title: "copyright text",
      type: "string",
      description: "The copyright text section at the bottom of the page",
      initialValue: "© 2023 username. All Rights Reserved.",
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
