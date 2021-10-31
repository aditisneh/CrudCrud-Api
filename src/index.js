import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AddItems from "./AddItems";
import configureStore from "./store/configStore.js";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div
      style={{
        position: "absolute",
        top: "30vh",
        left: "30vw",
      }}
    >
      
      <AddItems />
     
    </div>
  </Provider>,
  document.getElementById("root")
);