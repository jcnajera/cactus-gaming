import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import App from "views/App";

// Load SCSS
//import "../scss/application-base.scss";

const RootComponent = () => (
    <App />
);

ReactDOM.render(<RootComponent />, document.getElementById("root"));
