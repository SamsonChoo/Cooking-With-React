import { createContext } from "react";

const RecipeContext = createContext<(id: string | number) => void>(
  (id) => null // eslint-disable-line @typescript-eslint/no-unused-vars
);

export default RecipeContext;
