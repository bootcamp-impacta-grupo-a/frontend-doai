import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from './redux/store'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}> 
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
