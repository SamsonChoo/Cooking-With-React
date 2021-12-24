import IngredientList from "./IngredientList";
import { IRecipe } from "../interface";

interface Props {
  recipe: IRecipe.Recipe;
  handleRecipeDelete: (id: number | string) => void;
}

export default function Recipe(props: Props) {
  const { recipe, handleRecipeDelete } = props;
  const { id, name, servings, cookTime, instructions, ingredients } = recipe;
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <button className="btn btn--primary mr-1" type="button">
          Edit
        </button>
        <button
          className="btn btn--danger"
          type="button"
          onClick={() => handleRecipeDelete(id)}
        >
          Delete
        </button>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__value--indented recipe__instructions">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}
