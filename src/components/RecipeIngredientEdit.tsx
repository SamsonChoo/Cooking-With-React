import { IIngredient } from "../interface";

interface Props {
  ingredient: IIngredient.Ingredient;
}

export default function RecipeIngredientEdit(props: Props) {
  const {
    ingredient: { name, amount },
  } = props;
  return (
    <>
      <input type="text" className="recipe-edit__input" value={name} />
      <input type="text" className="recipe-edit__input" value={amount} />
      <button type="button" className="btn btn--danger">
        &times;
      </button>
    </>
  );
}
