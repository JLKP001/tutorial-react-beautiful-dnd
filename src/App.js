import React, { useState } from "react";
import { initialData } from "./initialData";

const App = () => {
  const [state, setstate] = useState(initialData);
  return <div>hello world</div>;
};

export default App;
