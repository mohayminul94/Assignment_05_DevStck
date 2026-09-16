import type { Technology } from "../../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologyGridProps {
  technologies: Technology[];
  onAdd: (technology: Technology) => void;
}

const TechnologyGrid = ({
  technologies,
  onAdd,
}: TechnologyGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default TechnologyGrid;