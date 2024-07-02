import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AntdConfig from "./theme/antd/index.tsx";
import { App as AntdApp } from "antd";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AntdConfig>
      <AntdApp>
        <App />
      </AntdApp>
    </AntdConfig>
  </React.StrictMode>
);
