import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./components/contexts/AuthContext.jsx";
import axios from "axios";

createRoot(document.getElementById("root")).render(
  // encapsulating App Component into Main Component
  <AuthProvider>
    <App />
  </AuthProvider>
);

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;
