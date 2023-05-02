import { useState } from "react";
import "./App.css";

import UseCallback from "./components/useCallback";
import UseEffect from "./components/useEffect";
import UseMemo from "./components/useMemo";
import UseRef from "./components/useRef";
import UseState from "./components/useState";



function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">

      <UseRef />

    </div>
  );
}

export default App;
