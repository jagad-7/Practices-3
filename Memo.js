import React, { useEffect, useMemo, useState } from "react";

export default function Memo() {
  const [counter, setCounter] = useState(1);
  
  useEffect(() => {
    document.title = `count = ${counter}`;
  }, [counter]);

  let num1 = 5;
  let num2 = 400;
  let sum = useMemo(() => {
    return num1 + num2;
  }, [num1, num2]);
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        UpdateCounter :
      </button>
      <h1>Sum : {sum}</h1>
    </div>
  );
}
