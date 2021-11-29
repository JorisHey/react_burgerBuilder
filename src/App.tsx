import { useEffect, useState } from 'react';
import Burger from './components/burger/Burger';
import { Ingredient } from './dataStructure';
import UI from './components/UI/UI';

function* generateId() {
  let id = 0;
  while (true) {
    yield (id += 1);
  }
}

const keyId = generateId();

function App(): JSX.Element {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  useEffect(() => {
    // * setting the initial state this way prevents unnecessary Generator (keyId) consumptions
    setIngredients([
      {
        id: `salad${String(keyId.next().value)}`,
        type: 'salad',
        count: 1,
      },
      {
        id: `cheese${String(keyId.next().value)}`,
        type: 'cheese',
        count: 1,
      },
      {
        id: `meat${String(keyId.next().value)}`,
        type: 'meat',
        count: 1,
      },
      {
        id: `bacon${String(keyId.next().value)}`,
        type: 'bacon',
        count: 1,
      },
    ]);
  }, []);

  const handleIngredientsChange = (index: number, newValue: Ingredient) => {
    const ingredientsCopy = [...ingredients];
    if (ingredientsCopy[index].type === newValue.type) {
      ingredientsCopy[index] = newValue;
    } else {
      newValue.id = `${newValue.type}${String(keyId.next().value)}`;
    }
    setIngredients(ingredientsCopy);
  };

  const handleIngredientsReorder = (
    sourceIndex: number,
    destinationIndex: number
  ) => {
    const ingredientsCopy = [...ingredients];

    const [reorderedIngredient] = ingredientsCopy.splice(sourceIndex, 1);
    ingredientsCopy.splice(destinationIndex, 0, reorderedIngredient);

    setIngredients(ingredientsCopy);
  };

  return (
    <>
      <Burger ingredients={ingredients} />
      <UI
        ingredients={ingredients}
        handleIngredientsChange={handleIngredientsChange}
        handleIngredientsReorder={handleIngredientsReorder}
      />
    </>
  );
}

export default App;
