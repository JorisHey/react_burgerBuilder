import { Ingredient } from '../../dataStructure';
import styles from './Burger.module.css';

const generateIngredient = (ingredient: Ingredient): JSX.Element[] =>
  new Array(ingredient.count)
    .fill(null)
    .map((_, index) => (
      <div
        key={`BURGER_${ingredient.id}_${index}`}
        className={styles[ingredient.type]}
      />
    ));

export const generateIngredients = (
  ingredients: Ingredient[]
): JSX.Element[] => {
  const elements: JSX.Element[] = [];

  ingredients.forEach((ingredient) => {
    elements.push(...generateIngredient(ingredient));
  });

  return elements;
};
