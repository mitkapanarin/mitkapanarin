import { defineField, defineType } from "sanity";
import { ITechnologyReferenceDocument } from "@/types/interface";

export default defineType({
  name: "tech",
  title: "Tech Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the Page",
      initialValue: "Technologies",
      readOnly: true,
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      description: "Choose List of technologies you want to display",
      validation: (Rule) =>
        Rule.unique().error("Each technology must be unique"),
      // @ts-ignore
      of: [
        {
          type: "reference",
          to: { type: "technologyOptions" },
          options: {
            filter: ({
              document,
            }: {
              document: ITechnologyReferenceDocument;
            }) => {
              const existingProjects = document.technologies
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
