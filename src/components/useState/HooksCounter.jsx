import { useState } from "react";

function HooksCounter() {
  // destructure
  const [count, setCount] = useState(0);

  // function handler1(){
  //     setCount(count + 1)
  // }
  // function handler2(){
  //     setCount(count>0? count - 1 : 0)
  // }
  // function handler3(){
  //     setCount(0)
  // }

  function handler(action) {
    switch (action) {
      case "increment":
        setCount(count + 1);
        break;

      case "decrement":
        setCount(count > 0 ? count - 1 : 0);
        break;

      case "reset":
        setCount(0);
        break;

      default:
        break;
    }
  }
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => handler("increment")}>Increment</button>
        <button onClick={() => handler("decrement")}>Decrement</button>
        <button onClick={() => handler("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default HooksCounter;
