import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  Draggable,
  DraggableProvided,
  DropResult,
} from 'react-beautiful-dnd';
import styles from './UI.module.css';
import { Ingredient } from '../../dataStructure';
import { generateUI } from './UIGenerate';

type ChildProps = {
  ingredients: Ingredient[];
  handleIngredientsChange: (index: number, newValue: Ingredient) => void;
  handleIngredientsReorder: (
    sourceIndex: number,
    destinationIndex: number
  ) => void;
};

const UI = ({
  ingredients,
  handleIngredientsChange,
  handleIngredientsReorder,
}: ChildProps): JSX.Element => {
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    console.log('source:', source);
    console.log('destination:', destination);

    handleIngredientsReorder(source.index, destination.index);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="ingredients">
          {(provided: DroppableProvided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={styles.container}
            >
              {ingredients.map((ingredient, index) => (
                <Draggable
                  key={`UI_${ingredient.id}`}
                  draggableId={ingredient.id}
                  index={index}
                >
                  {(providedDraggable: DraggableProvided) => (
                    <div>
                      <div
                        ref={providedDraggable.innerRef}
                        {...providedDraggable.draggableProps}
                        {...providedDraggable.dragHandleProps}
                      >
                        {generateUI(ingredient, index, handleIngredientsChange)}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default UI;
