import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { IRecipe } from "../interface";

interface Props {
  recipe: IRecipe.Recipe;
}

export default function RecipeEdit(props: Props) {
  const {
    recipe: { name, cookTime, servings, instructions, ingredients },
  } = props;
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button type="button" className="btn recipe-edit__remove-button">
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="recipe-edit__input"
          value={name}
        />
        <label htmlFor="cookTime" className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          className="recipe-edit__input"
          value={cookTime}
        />
        <label htmlFor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          className="recipe-edit__input"
          value={servings}
        />
        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          className="recipe-edit__input"
          value={instructions}
        />
      </div>
      <br />
      <label htmlFor="ingredients" className="recipe-edit__label">
        Ingredients
      </label>
      <div id="ingredients" className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div />
        {ingredients.map((ingredient) => (
          <RecipeIngredientEdit key={ingredient.id} ingredient={ingredient} />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button type="button" className="btn btn--primary">
          Add Ingredient
        </button>
      </div>
    </div>
  );
}
