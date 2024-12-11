import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import axios from "axios";
import AuthProvider from "./components/contexts/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'
// const queryClient = new QueryClient()
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // encapsulating App Component into Main Component
  // <QueryClientProvider client={queryClient}>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <App />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <ToastContainer />
    </AuthProvider>
  </QueryClientProvider>
);

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;
