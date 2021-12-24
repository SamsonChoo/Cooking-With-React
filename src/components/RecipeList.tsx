import Recipe from "./Recipe";
import { IRecipe } from "../interface";

interface Props {
  recipes: IRecipe.Recipe[];
  handleRecipeAdd: () => void;
}

export default function RecipeList(props: Props) {
  const { recipes, handleRecipeAdd } = props;
  return (
    <div className="recipe-list">
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
      <div className="recipe-list__add-recipe-btn-container">
        <button
          className="btn btn--primary"
          type="button"
          onClick={handleRecipeAdd}
        >
          Add Recipe
        </button>
      </div>
    </div>
  );
}
