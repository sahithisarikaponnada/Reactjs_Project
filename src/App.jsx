import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Logout from './Components/Logout.jsx';
import Register from './Components/Register.jsx';
import { ThemeProvider } from './Components/Themecontext'; 
import Dashboard from './Components/Dashboard.jsx';

import './App.css';

function App() {

  //const [user,setUser]=useState(null)

  return (
    <ThemeProvider>
      <Router>  
        <div>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Login />} /> {/* Default route to Login */}
              <Route path="/logout" element={<Logout />} />
              <Route path="/Dashboard" element={<Dashboard/>}/>
            </Routes>
        </div>
      </Router>
     </ThemeProvider>
  );
}
//suspense wraps component while loading and displays fallback UI



export default App;