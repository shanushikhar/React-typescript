import "./App.css";
import EventProps from "./components/EventProps";

function App() {
  return (
    <div className="App">
      <EventProps
        clickedOneButton={() => {
          console.log("clicked button");
        }}
        clickedSecondButton={(e) => {
          console.log(e);
        }}
        clickedThirdButton={(e, id) => {
          console.log(e, id);
        }}
        clickedStringButton={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
}

export default App;
