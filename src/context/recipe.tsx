import { createContext } from "react";
import { IRecipe } from "../interface";

interface RecipeContextHandlers {
  handleRecipeDelete: (id: string | number) => void;
  handleRecipeSelect: (id: string | number) => void;
  handleRecipeChange: (id: string | number, recipe: IRecipe.Recipe) => void;
}

const RecipeContext = createContext<RecipeContextHandlers>({
  handleRecipeDelete: () => null,
  handleRecipeSelect: () => null,
  handleRecipeChange: () => null,
});

export default RecipeContext;
