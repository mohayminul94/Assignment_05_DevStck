import { useState } from "react";
import type { Technology } from "../types/technology";

export const useStack = () => {
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  const addTechnology = (technology: Technology) => {
    const alreadyAdded = selectedStack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) return;

    setSelectedStack((previousStack) => [
      ...previousStack,
      technology,
    ]);
  };

  const removeTechnology = (id: number) => {
    setSelectedStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );
  };

  const removeAllTechnologies = () => {
    setSelectedStack([]);
  };

  return {
    selectedStack,
    addTechnology,
    removeTechnology,
    removeAllTechnologies,
  };
};