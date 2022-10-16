import "./App.css";
import EventProps from "./components/EventProps";
import InputChange from "./components/InputChange";

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
      <InputChange
        //ChangeVal=""
        onChangeHandler={(e) => console.log(e.target.value)}
      />
    </div>
  );
}

export default App;
