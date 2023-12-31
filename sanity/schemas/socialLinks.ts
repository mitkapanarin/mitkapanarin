import { defineField, defineType } from "sanity";
import { LuLink } from "react-icons/lu";

export default defineType({
  name: "socialLinks",
  title: "List of Social Media Links",
  type: "document",
  fields: [
    defineField({
      name: "linkType",
      title: "Link Type",
      type: "string",
      description:
        "Pick a link type from the list. e.g. github, linkedin, twitter, etc.",
      initialValue: "Frontend",
      options: {
        list: [
          {
            title: "github",
            value: "github",
          },
          { title: "linkedin", value: "linkedin" },
          { title: "twitter", value: "twitter" },
          { title: "email", value: "email" },
          { title: "facebook", value: "facebook" },
          { title: "instagram", value: "instagram" },
          { title: "youtube", value: "youtube" },
          { title: "phone", value: "phone" },
        ],
      },
    }),
    defineField({
      name: "link",
      title: "Link Address",
      type: "string",
      description: "Enter the link to your profile",
    }),
    defineField({
      name: "handle",
      title: "Profile username",
      type: "string",
      description: "Enter the username for your profile",
    }),
  ],
  preview: {
    select: {
      linkType: "linkType",
      handle: "handle",
      media: "icon",
    },
    prepare(selection: any) {
      const { linkType, handle } = selection;
      return {
        title: linkType,
        media: LuLink,
        subtitle: handle,
      };
    },
  },
});
