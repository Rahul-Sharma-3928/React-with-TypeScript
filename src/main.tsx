import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/redux.ts";
import { sliceStore } from "./redux/createSlicePage.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Provider store={sliceStore}>
        <App />
      </Provider>
    </Provider>
  </StrictMode>
);
