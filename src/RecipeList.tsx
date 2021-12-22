import Recipe from "./Recipe";
import { IRecipe } from "./Interface/index";

interface Props {
  recipes: IRecipe.Recipe[];
}

export default function RecipeList(props: Props) {
  const { recipes } = props;
  return (
    <>
      <div>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            name={recipe.name}
            servings={recipe.servings}
            cookTime={recipe.cookTime}
            instructions={recipe.instructions}
            ingredients={recipe.ingredients}
          />
        ))}
      </div>
      <button type="button">Add Recipe</button>
    </>
  );
}
