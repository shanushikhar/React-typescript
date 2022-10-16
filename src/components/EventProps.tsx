import React from "react";

type Event = {
  clickedOneButton: () => void;
  clickedSecondButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  clickedThirdButton: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  clickedStringButton: (name: string) => void;
};

export default function EventProps(props: Event) {
  return (
    <div>
      <h2>Button area</h2>
      <button onClick={props.clickedOneButton}>Button 1</button>
      <section>
        <button onClick={(val) => props.clickedSecondButton(val)}>
          Button 2 with event
        </button>
        <button onClick={() => props.clickedStringButton("Well hello there")}>
          Button 2 with string
        </button>
      </section>
      <section>
        <button onClick={(e) => props.clickedThirdButton(e, 2)}>
          Button 3 with event + number
        </button>
      </section>
    </div>
  );
}
