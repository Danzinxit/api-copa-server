import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { useState } from "react";

export default function AppRoutes() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const PrivateRoute = ({ children }) => {
    return token ? children : <Navigate to="/cadastro" />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <App setToken={setToken} />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
