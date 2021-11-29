type IngredientType = 'salad' | 'cheese' | 'bacon' | 'meat';
export interface Ingredient {
  id: string;
  type: IngredientType;
  count: number;
}
