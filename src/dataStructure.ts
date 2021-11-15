type IngredientType = 'salad' | 'cheese' | 'bacon' | 'meat';
export interface Ingredient {
  type: IngredientType;
  count: number;
}
