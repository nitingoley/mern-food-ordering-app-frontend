import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import AuthOProviderWithNavigate from "./auth/AuthOProviderWithNavigate.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthOProviderWithNavigate>
          <App />
          <Toaster visibleToasts={1} position="top-right" richColors />
        </AuthOProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
