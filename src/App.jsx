import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Logout from './Components/Logout.jsx';
import Register from './Components/Register.jsx';
import './App.css';

function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} /> {/* Default route to Login */}
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;

