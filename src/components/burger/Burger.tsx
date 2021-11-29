import { Ingredient } from '../../dataStructure';
import styles from './Burger.module.css';
import { generateIngredients } from './BurgerGenerate';

type ChildProps = {
  ingredients: Ingredient[];
};

const Burger = ({ ingredients }: ChildProps): JSX.Element => (
  <div className={styles.burger}>
    <div className={styles.breadTop}>
      <div className={`${styles.seed} ${styles.seeds}`} />
      <div className={`${styles.seed} ${styles.seeds2}`} />
    </div>
    {generateIngredients(ingredients)}
    <div className={styles.breadBottom} />
  </div>
);

export default Burger;
