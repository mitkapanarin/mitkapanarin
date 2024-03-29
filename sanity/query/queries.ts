import { groq } from "next-sanity";

export const dataQuery = groq`{
  "heroSection": *[_type == "hero"][0]{
    ...,
    "mainImage": mainImage.asset->url,
    "resume": resume.asset->url,
    socialLinks[]-> {
      ...
    }
  },
  "aboutSection": *[_type == "about"][0]{
    ...,
    "mainImage": mainImage.asset->url
  },
  "experience": *[_type == "experience"][0]{
    ...
  },
  "projects": *[_type == "projects"][0]{
    ...,
    projects[] {
      ...,
      "mainImage": mainImage.asset->url,
      "numberOfCharacters": length(pt::text(body)),
      "estimatedWordCount": round(length(pt::text(body)) / 5)
    }
  },
  "contact": *[_type == "contact"][0]{
    ...,
    socialLinks[]-> {
      ...
    }
  },
  "techSection": *[_type == "tech"][0]{
    ...,
    technologies[] -> {
      ...,
      "icon": icon.asset->url
    }  
  }
}`;

export const seoDataQuery = groq`
  *[_type == "hero"][0]{
    ...,
    "mainImage": mainImage.asset->url
  }`;
