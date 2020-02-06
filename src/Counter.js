import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function addCount() {
    const newCount = count + 1;
    setCount(newCount);
  }

  useEffect(() => {
    console.log("useEffect Mount");
    return function() {
      console.log("useEffect Unmounte");
    };
  }, []);

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
