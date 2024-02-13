import { ProjectTileViewEnum, TechStackEnum } from "./enum";

export interface ICommonProps {
  _type: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _createdAt: string;
  name: string;
  image: string;
  title: string;
}

export interface INavbarOptions {
  id: number;
  label: string;
  icon?: string;
  path: string;
}

export interface IAboutSection extends ICommonProps {
  body: any[];
}

export interface ISocialLinks extends ICommonProps {
  handle: string;
  linkType: string;
  link: string;
}

export interface IHeroSectionProps extends ICommonProps {
  mainImage: string;
  resume: string;
  socialLinks: ISocialLinks[];
}

export interface ITechStackSingleItem extends ICommonProps {
  stack: TechStackEnum;
  icon: string;
  label: string;
}

export interface ITechStackOptionProp extends ICommonProps {
  technologies: ITechStackSingleItem[];
}

export interface IProjectLinksList {
  _key: string;
  link: string;
  linkType: string;
}

export interface IProject {
  _key: string;
  title: string;
  description: string;
  mainImage: string;
  body: any[];
  indexForAnimation?: number;
  projectLinksList: IProjectLinksList[];
  numberOfCharacters: number;
  estimatedWordCount: number;
}

export interface IProjectList extends ICommonProps {
  projects: IProject[];
  projectTileView: ProjectTileViewEnum;
}

export interface IExperienceData {
  _key: string;
  companyName: string;
  designation: string;
  startDate: string;
  currentlyEmployed: boolean;
  endDate: string;
  body: any[];
}

export interface IExperienceList extends ICommonProps {
  experiences: IExperienceData[];
}

export interface IContact extends ICommonProps {
  copyright: string;
  socialLinks: ISocialLinks[];
}

export interface ITechnologyReferenceDocument extends ICommonProps {
  technologies: {
    _ref: string;
    _key: string;
    _type: "reference";
  }[];
}

export interface ISocialLinksReferenceDocument extends ICommonProps {
  socialLinks: {
    _ref: string;
    _key: string;
    _type: "reference";
  }[];
}
