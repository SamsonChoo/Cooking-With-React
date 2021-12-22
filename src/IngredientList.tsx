import Ingredient from "./Ingredient";

interface IIngredient {
  id: number;
  name: string;
  amount: string;
}

interface Props {
  ingredients: IIngredient[];
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
