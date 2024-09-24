import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App.jsx'
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
import './index.css'


// const [token, setToken] = useState(localStorage.getItem('token'));

// const PrivateRoute = ({ children }) => {
//   return token ? children : <Navigate to="/login" />;
// };

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
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
  </React.StrictMode>,
)