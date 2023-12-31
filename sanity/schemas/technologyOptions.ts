import { defineField, defineType } from "sanity";

export default defineType({
  name: "technologyOptions",
  title: "List of Technologies",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: "The name or label of the technology",
    }),
    defineField({
      name: "stack",
      title: "Belongs to Stack",
      type: "string",
      description:
        "The stack this tech belongs to, e.g. Frontend, Backend, etc.",
      initialValue: "Frontend",
      options: {
        list: [
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "Devops", value: "devops" },
        ],
      },
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      description: "The icon of the technology",
      options: {
        hotspot: true,
      },
      // @ts-ignore
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          initialValue: "Technology Icon",
        },
      ],
    }),
  ],
  preview: {
    select: {
      label: "label",
      stack: "stack",
      media: "icon",
    },
    prepare(selection: any) {
      const { label, stack, media } = selection;
      return {
        title: label,
        media: media,
        subtitle: stack,
      };
    },
  },
});
