import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SettingsProvider } from "./store/SettingsContext.jsx";
import { ErrorBoundary } from "./utils/ErrorBoundary.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SettingsProvider>
    <BrowserRouter>
      <ErrorBoundary fallback={<ErrorPage />}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </SettingsProvider>
);
