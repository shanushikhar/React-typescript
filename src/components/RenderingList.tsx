import React, { ReactNode } from "react";

interface ListType<P> {
  items: P[];
  render: (item: P) => ReactNode;
}

const RenderingList = <P,>({ items, render }: ListType<P>) => {
  return (
    <div>
      {
        <ul>
          {items.map((e, i) => (
            <li key={i}>{render(e)}</li>
          ))}
        </ul>
      }
    </div>
  );
};

export default RenderingList;
