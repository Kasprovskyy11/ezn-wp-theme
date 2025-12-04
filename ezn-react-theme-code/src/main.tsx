import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 2,
    },
  },
});

declare global {
  interface Window {
    wpSettings: {
      nonce: string;
      apiUrl: string;
      initialSlug?: string;
    };
  }
}

const router = createRouter({
  routeTree,
  basepath: "", 
  context: {
    queryClient,
    wpNonce: window.wpSettings?.nonce || "",
    apiUrl: window.wpSettings?.apiUrl || "/wp-json",
    initialSlug: window.wpSettings?.initialSlug || "home",
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  if (container) {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </React.StrictMode>
    );
  }
});
