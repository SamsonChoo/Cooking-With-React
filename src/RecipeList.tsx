import Recipe from "./Recipe";
import { IRecipe } from "./Interface";

interface Props {
  recipes: IRecipe.Recipe[];
}

export default function RecipeList(props: Props) {
  const { recipes } = props;
  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          name={recipe.name}
          servings={recipe.servings}
          cookTime={recipe.cookTime}
          instructions={recipe.instructions}
        />
      ))}
    </div>
  );
}
