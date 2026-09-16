import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaStar,
} from "react-icons/fa";

import {
  SiSvelte,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

import type { Technology } from "../../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
}

const iconMap = {
  react: <FaReact />,
  vue: <FaVuejs />,
  svelte: <SiSvelte />,
  next: <SiNextdotjs />,
  node: <FaNodeJs />,
  postgres: <SiPostgresql />,
  redis: <SiRedis />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  java: <FaJava />,
  tailwind: <SiTailwindcss />,
  docker: <FaDocker />,
};

const TechnologyCard = ({
  technology,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <article className="flex min-h-[250px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-600 hover:shadow-md">
      
      <div className="flex items-start justify-between">
        <div className="text-3xl">
          {iconMap[technology.icon as keyof typeof iconMap]}
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-800">
        {technology.name}
      </h3>

      <p className="mt-3 flex-grow text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
        <span>{technology.category}</span>

        <span>{technology.level}</span>

        <span className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          {technology.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        className="mt-5 w-full rounded-lg bg-slate-900 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        Add to Stack
      </button>
    </article>
  );
};

export default TechnologyCard;