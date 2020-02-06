import React, { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./styles.css";
import Reducer from "./redux/Reducer";
import Counter from "./components/Counter";
import ReduxCounter from "./components/ReduxCounter";

const store = createStore(Reducer);

function App() {
  const [isVisible, setVisible] = useState(true);
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello React</h1>
        {isVisible ? (
          <div>
            <div>
              <Counter />
            </div>
            <br />
            <div>
              <ReduxCounter />
            </div>
          </div>
        ) : null}
        <br />
        <button
          onClick={() => {
            setVisible(!isVisible);
          }}
        >
          show / hide
        </button>
      </div>
    </Provider>
  );
}

export default App;
