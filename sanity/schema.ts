import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./schemas/blockContent";

import {
  about,
  tech,
  hero,
  projects,
  experience,
  contact,
  technologyOptions,
  socialLinks,
} from "./schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    hero,
    about,
    tech,
    experience,
    projects,
    contact,
    technologyOptions,
    socialLinks,
  ],
};
