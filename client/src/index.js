import React, { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

//google auth
import { GoogleOAuthProvider } from "@react-oauth/google";

//redux
import { Provider } from "react-redux";
import store from "./state/store";

//chakra ui
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils/chakraui";

//render
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <GoogleOAuthProvider
          clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        >
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </GoogleOAuthProvider>
      </Provider>
    </Router>
  </StrictMode>
);
