import React, { useState } from "react";
import "./styles.css";
import Counter from "./Counter";

export default function App() {
  const [isVisible, setVisible] = useState(true);
  return (
    <div className="App">
      <h1>Hello React</h1>
      <h2>aabbcc</h2>
      {isVisible ? <Counter /> : null}
      <br />
      <button
        onClick={() => {
          setVisible(!isVisible);
        }}
      >
        show / hide
      </button>
    </div>
  );
}
