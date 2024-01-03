import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SiteTheme from "./utils/SiteTheme.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SiteTheme>
          <RouterProvider router={router} />
        </SiteTheme>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
