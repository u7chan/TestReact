import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  function addCount() {
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div>
      <div>
        <span>count: {count}</span>
      </div>
      <div>
        <button onClick={addCount}>Add</button>
      </div>
    </div>
  );
}

export default Counter;
