import React from "react";
import ReactDom from "react-dom";

function App() {
  return <h1>Hello!</h1>;
}

const root = ReactDom.createRoot(document.querySelector("#app"));
root.render(<App />);
