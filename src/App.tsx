import "./App.css";
import Box from "./components/Box";
import { ThemeContextProvider } from "./components/ThemeContextProvider";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
