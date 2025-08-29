import React from "react";
import ReactDOM from "react-dom";
const parent = React.createElement("h1", {}, "Hello world");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
