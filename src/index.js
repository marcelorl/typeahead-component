import React from "react";
import ReactDOM from "react-dom";
import TagsInput from "./TagsInput";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TagsInput />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
