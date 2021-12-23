import IngredientList from "./IngredientList";
import { IIngredient } from "../interface";

interface Props {
  name: string;
  servings: number;
  cookTime: string;
  instructions: string;
  ingredients: IIngredient.Ingredient[];
}

export default function Recipe(props: Props) {
  const { name, servings, cookTime, instructions, ingredients } = props;
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <button className="btn btn--primary mr-1" type="button">
          Edit
        </button>
        <button className="btn btn--danger" type="button">
          Delete
        </button>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>
      <div>
        <span>Ingredients:</span>
        <div>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}
