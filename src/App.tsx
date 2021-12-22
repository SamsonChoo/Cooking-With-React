import RecipeList from "./RecipeList";
import { IRecipe } from "./Interface";

const sampleRecipes: IRecipe.Recipe[] = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put pepper on pork\n2. Put pork in oven\n3. Eat pork",
  },
];

function App() {
  return <RecipeList recipes={sampleRecipes} />;
}

export default App;
