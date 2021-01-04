import React, { useState } from "react";
import { initialData } from "./initialData";
import { Column } from "./Column";

const App = () => {
  const [state, setstate] = useState(initialData);
  return (
    <>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskIds) => state.tasks[taskIds]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </>
  );
};

export default App;
