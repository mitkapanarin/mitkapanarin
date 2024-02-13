import { IProject } from "@/types/interface";
import ModalCard from "../Card/ModalCard";
import { ProjectTileViewEnum } from "@/types/enum";
import ModalListCard from "../Card/ModalListCard";

const Portfolio = ({
  projects,
  projectTileView,
}: {
  projects: IProject[];
  projectTileView: ProjectTileViewEnum;
}) => {
  return (
    <section id="portfolio" className="pt-14 text-muted-foreground sm:text-lg">
      <div className="group">
        <h1 className="title-bottom-line cursor-pointer text-2xl">Portfolio</h1>
        {projectTileView === ProjectTileViewEnum.LIST ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 justify-center">
            {projects?.map((item: IProject, index: number) => (
              <ModalListCard
                {...item}
                key={item?._key}
                indexForAnimation={index}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 justify-center">
            {projects?.map((item: IProject, index: number) => (
              <ModalCard key={item?._key} {...item} indexForAnimation={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
