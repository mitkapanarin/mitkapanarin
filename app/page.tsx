import Navbar from "@/components/Layout/Navbar/Navbar";
import {
  About,
  Hero,
  Contact,
  TechStack,
  Portfolio,
  Experience,
} from "@/components/Sections";
import { sanityClientFetch } from "@/sanity/lib/client";
import { dataQuery } from "@/sanity/query/queries";
import {
  IAboutSection,
  IContact,
  IExperienceList,
  IHeroSectionProps,
  IProjectList,
  ITechStackOptionProp,
} from "@/types/interface";

interface IDataProps {
  heroSection: IHeroSectionProps;
  aboutSection: IAboutSection;
  techSection: ITechStackOptionProp;
  projects: IProjectList;
  experience: IExperienceList;
  contact: IContact;
}

const page = async () => {
  const data: IDataProps = await sanityClientFetch({
    query: dataQuery,
  });
  // console.log("xxxxx", data?.techSection);
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-5xl mt-10 pt-16">
        <Hero {...data?.heroSection} />
        <About about={data?.aboutSection} />
        <TechStack tech={data?.techSection?.technologies} />
        <Experience data={data?.experience?.experiences} />
        <Portfolio projects={data?.projects?.projects} />
        <Contact data={data?.contact} />
      </main>
    </>
  );
};

export default page;
