import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { initialData } from "./initialData";
import { Column } from "./Column";

const App = () => {
  const [state, setstate] = useState(initialData);
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskIds) => state.tasks[taskIds]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

export default App;
