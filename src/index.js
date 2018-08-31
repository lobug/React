import React from "react";
import ReactDOM from "react-dom";
import TodoLista from "./components/TodoLista";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<TodoLista />, document.getElementById("root"));
registerServiceWorker();
