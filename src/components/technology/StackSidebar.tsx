import { FaTimes } from "react-icons/fa";
import type { Technology } from "../../types/technology";

interface StackSidebarProps {
  selectedStack: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({
  selectedStack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) => {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-5">
      
      <h3 className="text-lg font-bold text-slate-800">
        Your Stack
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        {selectedStack.length} Technology
        {selectedStack.length !== 1 ? "s" : ""} Selected
      </p>

      <div className="mt-5 space-y-3">
        {selectedStack.length === 0 ? (
          <p className="py-8 text-center text-sm text-slate-400">
            No technology selected yet.
          </p>
        ) : (
          selectedStack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
            >
              <div>
                <h4 className="font-semibold text-slate-700">
                  {technology.name}
                </h4>

                <p className="text-xs text-slate-400">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-slate-400 hover:text-red-500"
              >
                <FaTimes />
              </button>
            </div>
          ))
        )}
      </div>

      {selectedStack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-lg border border-red-200 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default StackSidebar;