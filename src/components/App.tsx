import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeList from "./RecipeList";
import { IRecipe } from "../interface";
import "../css/App.css";

const sampleRecipes: IRecipe.Recipe[] = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      { id: 1, name: "Chicken", amount: "2 Pounds" },
      { id: 2, name: "Salt", amount: "1 Tbs" },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put pepper on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      { id: 1, name: "Pork", amount: "3 Pounds" },
      { id: 2, name: "Pepper", amount: "2 Tbs" },
    ],
  },
];

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  const handleRecipeAdd = useCallback(() => {
    const newRecipe: IRecipe.Recipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr.",
      ingredients: [{ id: uuidv4(), name: "Name", amount: "1 Tbs" }],
    };

    setRecipes([...recipes, newRecipe]);
  }, [recipes]);

  const handleRecipeDelete = useCallback(
    (id: string | number) => {
      setRecipes(recipes.filter((recipe) => recipe.id !== id));
    },
    [recipes]
  );

  return (
    <RecipeList
      recipes={recipes}
      handleRecipeAdd={handleRecipeAdd}
      handleRecipeDelete={handleRecipeDelete}
    />
  );
}

export default App;
