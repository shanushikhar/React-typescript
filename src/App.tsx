import "./App.css";
import OptionalProps from "./components/OptionalProps";
import Oscar from "./components/Oscar";
import OscarInComponent from "./components/OscarInComponent";

function App() {
  return (
    <div className="App">
      <Oscar>Welcome to Oscar</Oscar>
      <OscarInComponent>
        <Oscar>Well Hello Everyone, Welcome</Oscar>
      </OscarInComponent>

      <OptionalProps message={4} message1="Hello" />
    </div>
  );
}

export default App;
