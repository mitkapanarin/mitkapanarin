import { defineField, defineType } from "sanity";
import { LuLink } from "react-icons/lu";

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
      name: "projectTileView",
      title: "Select Project Tile View",
      type: "string",
      description: "Choose the view of your project tiles",
      initialValue: "grid",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Grid View",
            value: "grid",
          },
          { title: "List View", value: "list" },
        ],
      },
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
            defineField({
              name: "title",
              title: "Project Title",
              type: "string",
              description: "Project title",
            }),
            {
              name: "description",
              title: "Short description of the project",
              type: "string",
              description: "Write short description of the project here",
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
              name: "body",
              title: "Body",
              type: "blockContent",
              description: "Add your project long description here",
            },
            {
              name: "projectLinksList",
              title: "Project Links List",
              type: "array",
              description: "Add your list of project links here",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "linkType",
                      title: "Link Type",
                      description:
                        "Add Type of Link, e.g. GitHub, YouTube, blog etc.",
                      type: "string",
                    },
                    {
                      name: "link",
                      title: "Project Link",
                      description: "Add project link here",
                      type: "url",
                    },
                  ],
                  preview: {
                    select: {
                      linkType: "linkType",
                      link: "link",
                    },
                    prepare(selection: any) {
                      const { linkType, link } = selection;
                      return {
                        title: linkType,
                        media: LuLink,
                        subtitle: `${link}`,
                      };
                    },
                  },
                },
              ],
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
