import { Ingredient } from '../../dataStructure';
import styles from './UI.module.css';

function* generateId() {
  let id = 0;
  while (true) yield id++;
}

const keyId = generateId();

export function generateUI(
  ingredient: Ingredient,
  index: number,
  changeIngredients: (index: number, newValue: Ingredient) => void
) {
  return (
    <div
      draggable="true"
      key={`_UI_${ingredient.type}${keyId.next().value}`}
      className={`${styles.box} ${styles[ingredient.type]}`}
    >
      <input
        type="number"
        min="1"
        max="9"
        value={ingredient.count}
        onChange={(e) => changeIngredients(index, { type: ingredient.type, count: Number(e.target.value) })}
      />
      <span className={styles.drag}>
        <hr />
        <hr />
      </span>
    </div>
  );
}
