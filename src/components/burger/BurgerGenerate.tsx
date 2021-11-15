import { Ingredient } from '../../dataStructure';
import styles from './Burger.module.css';

function* generateId() {
  let id = 0;
  while (true) yield id++;
}

const keyId = generateId();

function generateIngredient(ingredient: Ingredient) {
  return (
    <>
      {new Array(ingredient.count).fill(null).map(() => (
        <div key={`_BURGER_${ingredient.type}${keyId.next().value}`} className={styles[ingredient.type]}></div>
      ))}
    </>
  );
}

export function generateIngredients(ingredients: Ingredient[]) {
  const elements: JSX.Element[] = [];

  ingredients.forEach((ingredient) => {
    elements.push(...generateIngredient(ingredient).props.children);
  });

  return elements;
}
