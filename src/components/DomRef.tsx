import React, { useEffect, useRef } from "react";

export default function DomRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      DomRef
      <input ref={inputRef} placeholder="put some val" />
    </div>
  );
}
