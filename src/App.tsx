import { useState } from 'react';
import Burger from './components/burger/Burger';
import { Ingredient } from './dataStructure';
import UI from './components/UI/UI';

function App() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { type: 'salad', count: 1 },
    { type: 'meat', count: 1 },
    { type: 'cheese', count: 1 },
    { type: 'bacon', count: 1 },
  ]);

  function handleIngredientsChange(index: number, newValue: Ingredient) {
    const newState = [...ingredients];
    newState[index] = newValue;
    setIngredients(newState);
  }

  return (
    <>
      <Burger ingredients={ingredients} />
      <UI ingredients={ingredients} changeIngredients={handleIngredientsChange} />
    </>
  );
}

export default App;
