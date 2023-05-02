import { useState } from "react";
import "./App.css";

import UseReducer from "./components/useReducer";




function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">

      <UseReducer>{(num: number) => <>current count is :- {num}</>}</UseReducer>

    </div>
  );
}

export default App;
