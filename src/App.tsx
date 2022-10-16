import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const name = {
    first: "Cooper",
    last: "Martin",
  };

  const personNames = [
    {
      firstname: "diana",
      lastname: "lane",
    },
    {
      firstname: "ruth",
      lastname: "suth",
    },
    {
      firstname: "Dark",
      lastname: "Desire",
    },
  ];

  return (
    <div className="App">
      <Greet name={"bang"} number={10} isLoggedIn={true} />
      <Person namexyz={name} />
      <PersonList names={personNames} />
    </div>
  );
}

export default App;
