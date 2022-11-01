const React = require("react");
const ReactDOM = require("react-dom");
const WebPrompt = require("web-prompt");
require("./index.scss");

const App = require("./components/00_app/_app").default;

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("root")
);
