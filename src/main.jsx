import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppShell from "@components/molecules/AppShell/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppShell>
      <App />
    </AppShell>
  </React.StrictMode>
);
