import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const buttonStyle = {
    height: "50%",
    background: "none",
    color: "white",
  };

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(Math.max(count - 1, 0)); // assume count cannot be negative

  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <button style={buttonStyle} onClick={increment}>
        Increment
      </button>
      <p style={{ margin: "0 20%" }}>{count}</p>
      <button style={buttonStyle} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
