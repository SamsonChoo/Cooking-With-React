import { createContext } from "react";

interface RecipeContextHandlers {
  handleRecipeDelete: (id: string | number) => void;
  handleRecipeSelect: (id: string | number) => void;
}

const RecipeContext = createContext<RecipeContextHandlers>({
  handleRecipeDelete: () => null,
  handleRecipeSelect: () => null,
});

export default RecipeContext;
