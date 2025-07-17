import * as React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "../components/Grid/App";
import "../../styles/index.css";
import "../components/Grid/App.css";
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('YOUR LICENSE KEY');

const root = createRoot(document.getElementById("content-area") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
