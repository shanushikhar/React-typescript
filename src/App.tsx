import "./App.css";

import UseReducer from "./components/useReducer";

function App() {
  return (
    <div className="App">
      <UseReducer>{(num: number) => <>current count is :- {num}</>}</UseReducer>
    </div>
  );
}

export default App;
