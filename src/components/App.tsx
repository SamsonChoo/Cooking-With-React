import { useState, useCallback, useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeList from "./RecipeList";
import { IRecipe } from "../interface";
import RecipeEdit from "./RecipeEdit";
import "../css/App.css";
import RecipeContext from "../context";

const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

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
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | number>();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    const recipeJSON: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON) {
      setRecipes(JSON.parse(recipeJSON));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

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

  function handleRecipeSelect(id: number | string) {
    setSelectedRecipeId(id);
  }

  const recipeContextValue = useMemo(
    () => ({
      handleRecipeDelete,
      handleRecipeSelect,
    }),
    []
  );

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} handleRecipeAdd={handleRecipeAdd} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}

export default App;
