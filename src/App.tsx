import "./App.css";
import Assertion from "./components/Assertion";
import User from "./components/User";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <User />
      <Users />
      <Assertion />
    </div>
  );
}

export default App;
