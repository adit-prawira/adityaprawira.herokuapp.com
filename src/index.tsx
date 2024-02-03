import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastProvider } from "./common/components/ToastProvider";
import { ThemeProvider } from "./common/components/ThemeProvider";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ToastProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
