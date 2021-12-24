import IIngredient from "./ingredient";

export interface Recipe {
  id: number | string;
  name: string;
  servings: number;
  cookTime: string;
  instructions: string;
  ingredients: IIngredient.Ingredient[];
}
