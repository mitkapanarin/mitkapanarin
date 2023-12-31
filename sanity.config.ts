import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title("Content Menu")
          .items([
            S.listItem()
              .title("Hero Section")
              .child(S.document().schemaType("hero").documentId("hero")),
            S.listItem()
              .title("About Section")
              .child(S.document().schemaType("about").documentId("about")),
            S.listItem()
              .title("Tech Section")
              .child(S.document().schemaType("tech").documentId("tech")),
            S.listItem()
              .title("Experience Section")
              .child(
                S.document().schemaType("experience").documentId("experience")
              ),
            S.listItem()
              .title("Featured Projects")
              .child(
                S.document().schemaType("projects").documentId("projects")
              ),
            S.listItem()
              .title("Contact Section")
              .child(S.document().schemaType("contact").documentId("contact")),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  "hero",
                  "about",
                  "tech",
                  "experience",
                  "projects",
                  "contact",
                ].includes(listItem.getId() as string)
            ),
          ]);
      },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
