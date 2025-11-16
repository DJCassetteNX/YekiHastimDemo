// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "../router/AppRoutes";
import ScrollToTop from "../utils/ScrollToTop";

export default function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}
