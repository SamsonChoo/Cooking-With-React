import Recipe from "./Recipe";

interface IRecipe {
  id: number;
  name: string;
  servings: number;
  cookTime: string;
  instructions: string;
}

interface Props {
  recipes: IRecipe[];
}

export default function RecipeList(props: Props) {
  const { recipes } = props;
  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          name={recipe.name}
          servings={recipe.servings}
          cookTime={recipe.cookTime}
          instructions={recipe.instructions}
        />
      ))}
    </div>
  );
}
