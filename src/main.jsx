import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";

import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ChatContextProvider } from "./context/ChatContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);
