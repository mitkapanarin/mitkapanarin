import Image from "next/image";
import { IHeroSectionProps } from "@/types/interface";
import IconsAndResume from "./IconsAndResume";

const Hero = ({
  socialLinks,
  mainImage,
  name,
  title,
  resume,
}: IHeroSectionProps) => {
  return (
    <section
      id="home"
      className="flex items-center justify-between gap-4 flex-col md:flex-row"
    >
      <div className="mb-2">
        <h2 className="gradient-text text-3xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-4xl my-2 font-bold">
          {title}
        </h2>
        <p className="text-2xl text-muted-foreground mb-3">{name}</p>
        <div className="hidden md:block">
          <IconsAndResume socialLinks={socialLinks} resume={resume} />
        </div>
      </div>

      {mainImage && (
        <Image
          width={1000}
          height={1000}
          className="h-[450px] w-[400px] object-cover rounded-xl object-center"
          src={mainImage}
          alt=""
        />
      )}
      <div className="block md:hidden">
        <IconsAndResume socialLinks={socialLinks} resume={resume} />
      </div>
    </section>
  );
};

export default Hero;
