import { IIngredient } from "../interface";

interface Props {
  ingredient: IIngredient.Ingredient;
  handleIngredientChange: (
    ingredient_id: string | number,
    ingredient: IIngredient.Ingredient
  ) => void;
}

interface IngredientFields {
  name?: string;
  amount?: string;
}

export default function RecipeIngredientEdit(props: Props) {
  const { ingredient, handleIngredientChange } = props;

  const { id, name, amount } = ingredient;

  function handleChange(changes: IngredientFields) {
    handleIngredientChange(id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        type="text"
        className="recipe-edit__input"
        value={name}
        onInput={(e) => handleChange({ name: e.currentTarget.value })}
      />
      <input
        type="text"
        className="recipe-edit__input"
        value={amount}
        onInput={(e) => handleChange({ amount: e.currentTarget.value })}
      />
      <button type="button" className="btn btn--danger">
        &times;
      </button>
    </>
  );
}
