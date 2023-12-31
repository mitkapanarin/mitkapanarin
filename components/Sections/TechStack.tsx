import { ITechStackSingleItem } from "@/types/interface";
import TooltipComponent from "../Tooltip/TooltipComponent";
import Image from "next/image";
import { TechStackEnum } from "@/types/enum";

const TechStack = ({ tech }: { tech: ITechStackSingleItem[] }) => {
  const frontend = tech?.filter(
    (item) => item?.stack == TechStackEnum.FRONTEND
  );
  const backend = tech?.filter((item) => item?.stack == TechStackEnum.BACKEND);
  const devops = tech?.filter((item) => item?.stack == TechStackEnum.DEVOPS);

  return (
    <section id="#about" className="group">
      <h1 className="title-bottom-line mt-14 cursor-pointer text-2xl">
        Tech Stack
      </h1>

      {frontend?.length > 0 && (
        <div className="flex flex-col gap-3 mb-4">
          <h1 className="text-lg uppercase">Frontend</h1>
          <div className="flex flex-wrap gap-2">
            {frontend.map((item: ITechStackSingleItem) => (
              <TooltipComponent
                key={item?._id}
                label={item?.label}
                item={
                  <Image
                    className="cursor-pointer"
                    width={45}
                    height={45}
                    src={item?.icon}
                    alt={item?.label}
                  />
                }
              />
            ))}
          </div>
        </div>
      )}

      {backend?.length > 0 && (
        <div className="flex flex-col gap-3">
          <h1 className="text-lg uppercase">backend</h1>
          <div className="flex flex-wrap gap-2">
            {backend.map((item: ITechStackSingleItem) => (
              <TooltipComponent
                key={item?._id}
                label={item?.label}
                item={
                  <Image
                    className="cursor-pointer"
                    width={45}
                    height={45}
                    src={item?.icon}
                    alt={item?.label}
                  />
                }
              />
            ))}
          </div>
        </div>
      )}
      {devops?.length > 0 && (
        <div className="flex flex-col gap-3 mt-4">
          <h1 className="text-lg uppercase">devops & others</h1>
          <div className="flex flex-wrap gap-2">
            {devops.map((item: ITechStackSingleItem) => (
              <TooltipComponent
                key={item?._id}
                label={item?.label}
                item={
                  <Image
                    className="cursor-pointer"
                    width={45}
                    height={45}
                    src={item?.icon}
                    alt={item?.label}
                  />
                }
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default TechStack;
