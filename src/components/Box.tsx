import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

export default function Box() {
  const context = useContext(ThemeContext);

  return (
    <>
      <section
        style={{ color: context.main.color, fontWeight: context.main.weight }}
      >
        Box is here to glow up!!!
      </section>

      <section
        style={{
          color: context.secondary.color,
          fontStyle: context.secondary.type,
        }}
      >
        Box is here to glow up with secondary types!!!
      </section>
    </>
  );
}
