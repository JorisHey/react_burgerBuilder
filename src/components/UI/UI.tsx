import styles from './UI.module.css';
import { Ingredient } from '../../dataStructure';
import { generateUI } from './UIGenerate';

type ChildProps = {
  ingredients: Ingredient[];
  changeIngredients: (index: number, newValue: Ingredient) => void;
};

export default function UI({ ingredients, changeIngredients }: ChildProps) {
  return (
    <>
      <div className={styles.container}>
        {ingredients.map((ingredient, index) => {
          return generateUI(ingredient, index, changeIngredients);
        })}
      </div>
    </>
  );
}
