import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { SortinBanner } from "sortin-vite-library";


ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <App />
      <div id="sortin-banner">
      <SortinBanner type='fab' />
      </div>
    </Provider>
);
