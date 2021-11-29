import { Ingredient } from '../../dataStructure';
import styles from './UI.module.css';

export function generateUI(
  ingredient: Ingredient,
  index: number,
  changeIngredients: (i: number, newValue: Ingredient) => void
): JSX.Element {
  return (
    <div className={`${styles.box} ${styles[ingredient.type]}`}>
      <input
        type="number"
        min="1"
        max="4"
        value={ingredient.count}
        onKeyDown={() => false}
        onChange={(e) => {
          if (Number(e.target.value) > 4) return false;
          changeIngredients(index, {
            id: ingredient.id,
            type: ingredient.type,
            count: Number(e.target.value),
          });
        }}
      />
      <span className={styles.drag}>
        <hr />
        <hr />
      </span>
    </div>
  );
}
