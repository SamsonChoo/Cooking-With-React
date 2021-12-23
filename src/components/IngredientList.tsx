import Ingredient from "./Ingredient";
import { IIngredient } from "../interface";

interface Props {
  ingredients: IIngredient.Ingredient[];
}

export default function IngredientList(props: Props) {
  const { ingredients } = props;
  const ingredientElements = ingredients.map((ingredient) => (
    <Ingredient
      key={ingredient.id}
      name={ingredient.name}
      amount={ingredient.amount}
    />
  ));
  return <div className="ingredient-grid">{ingredientElements}</div>;
}
