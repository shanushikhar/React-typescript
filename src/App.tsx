import "./App.css";
import Box from "./components/Box";
import { ThemeContextProvider } from "./components/ThemeContextProvider";
import User from "./components/User";
import { UserContextProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
