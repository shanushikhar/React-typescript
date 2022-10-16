import React from "react";
import { Event } from "./ExportingTypes";

//export default function EventProps(props: Event) {
// destructuring props
export default function EventProps({
  clickedOneButton,
  clickedSecondButton,
  clickedThirdButton,
  clickedStringButton,
}: Event) {
  return (
    <div>
      <h2>Button area</h2>
      <button onClick={clickedOneButton}>Button 1</button>
      <section>
        <button onClick={(val) => clickedSecondButton(val)}>
          Button 2 with event
        </button>
        <button onClick={() => clickedStringButton("Well hello there")}>
          Button 2 with string
        </button>
      </section>
      <section>
        <button onClick={(e) => clickedThirdButton(e, 2)}>
          Button 3 with event + number
        </button>
      </section>
    </div>
  );
}
