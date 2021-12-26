import { useContext, useCallback } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { IRecipe, IIngredient } from "../interface";
import RecipeContext from "../context";

interface Props {
  recipe: IRecipe.Recipe;
}

interface RecipeFields {
  name?: string;
  cookTime?: string;
  servings?: number;
  instructions?: string;
  ingredients?: IIngredient.Ingredient[];
}

export default function RecipeEdit(props: Props) {
  const { recipe } = props;
  const { id, name, cookTime, servings, instructions, ingredients } = recipe;
  const { handleRecipeChange } = useContext(RecipeContext);

  function handleChange(changes: RecipeFields) {
    handleRecipeChange(id, { ...recipe, ...changes });
  }

  const handleIngredientChange = useCallback(
    (ingredient_id: number | string, ingredient: IIngredient.Ingredient) => {
      const newIngredients = [...recipe.ingredients];
      const index = newIngredients.findIndex((i) => i.id === ingredient_id);
      newIngredients[index] = ingredient;
      handleChange({ ingredients: newIngredients });
    },
    [recipe]
  );

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
          onInput={(e) => handleChange({ name: e.currentTarget.value })}
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
          onInput={(e) => handleChange({ cookTime: e.currentTarget.value })}
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
          onInput={(e) =>
            handleChange({ servings: Number(e.currentTarget.value) })
          }
        />
        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          className="recipe-edit__input"
          value={instructions}
          onInput={(e) => handleChange({ instructions: e.currentTarget.value })}
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
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
          />
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
