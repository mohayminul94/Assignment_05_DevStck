import Container from "../common/Container";
import { technologies } from "../../data/technologies";
import TechnologyGrid from "./TechnologyGrid";
import StackSidebar from "./StackSidebar";
import { useStack } from "../../hooks/useStack";

const TechnologiesSection = () => {
  const {
    selectedStack,
    addTechnology,
    removeTechnology,
    removeAllTechnologies,
  } = useStack();

  return (
    <section
      id="technologies"
      className="bg-slate-50 py-20"
    >
      <Container>
        
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-slate-800">
            Explore the{" "}
            <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-3 text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          
          <TechnologyGrid
            technologies={technologies}
            onAdd={addTechnology}
          />

          <StackSidebar
            selectedStack={selectedStack}
            onRemove={removeTechnology}
            onRemoveAll={removeAllTechnologies}
          />
        </div>
      </Container>
    </section>
  );
};

export default TechnologiesSection;