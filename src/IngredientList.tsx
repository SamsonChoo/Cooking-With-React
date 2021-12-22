import Ingredient from "./Ingredient";
import { IIngredient } from "./Interface";

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
  return <div>{ingredientElements}</div>;
}
