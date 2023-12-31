import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Featured Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page title",
      type: "string",
      description: "Add your project title here",
      initialValue: "Featured Projects",
      readOnly: true,
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      description: "Add your projects list here",
      // @ts-ignore
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Project Title",
              type: "string",
              description: "Project title",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
              description: "Add your project description here",
            },
            {
              name: "mainImage",
              title: "Main image",
              type: "image",
              description: "Add your project image here",
              options: {
                hotspot: true,
              },
              // @ts-ignore
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                  description: "Add an alt text of the project image",
                  initialValue: "Project Image",
                },
              ],
            },
            {
              name: "github",
              title: "GitHub repository Link",
              type: "string",
              description: "Add project github repository link here",
            },
            {
              name: "deployment",
              title: "Deployment Link",
              type: "string",
              description: "Add Live deployment link here",
            },
          ],
          preview: {
            select: {
              title: "title",
              description: "description",
              media: "mainImage",
            },
            prepare(selection: any) {
              const { title, description, media } = selection;
              return {
                title: title,
                media: media,
                subtitle: `${description}`,
              };
            },
          },
        },
      ],
    }),
  ],
});
