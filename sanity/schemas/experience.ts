import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the Page",
      initialValue: "experience",
      readOnly: true,
    }),
    defineField({
      name: "experiences",
      title: "List of Experiences",
      type: "array",
      description: "List of Past Experiences",
      // @ts-ignore
      of: [
        {
          type: "object",
          fields: [
            {
              name: "companyName",
              title: "Company Name",
              type: "string",
              description: "The name of the company you worked for",
            },
            {
              name: "designation",
              title: "Designation",
              type: "string",
              description: "The position you held in the company",
            },
            {
              name: "startDate",
              title: "Start Date",
              type: "date",
              description: "Start date of employment",
            },
            {
              name: "currentlyEmployed",
              title: "Currently Employed",
              type: "boolean",
              description: "Check if the employee is still employed",
              initialValue: false,
            },
            {
              name: "endDate",
              title: "End Date",
              type: "date",
              description: "End date of employment",
              hidden: ({
                parent,
              }: {
                parent: {
                  currentlyEmployed: boolean;
                };
              }) => parent.currentlyEmployed, // Hide if currentlyEmployed is checked\
            },
            {
              name: "body",
              title: "Body",
              type: "blockContent",
              description: "Description of the work you did",
              initialValue: "Description of the work you did",
            },
          ],
          preview: {
            select: {
              title: "companyName",
              designation: "designation",
              time: "startDate",
              endTime: "endDate",
            },
            prepare(selection: any) {
              const { title, designation, time, endTime } = selection;
              return {
                title: title,
                subtitle: `${designation} - ${time} - ${
                  endTime ? endTime : "Present"
                }`,
              };
            },
          },
        },
      ],
    }),
  ],
});
