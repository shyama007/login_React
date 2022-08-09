
import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Components/login-ui/loginForm";
import Forgot from "./Components/login-ui/forgetPassword";
// import Dashbord from "./Components/dashbord-ui/Dashboard";   


function App() {
 
   
  
  return (
   <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/forgot"element={<Forgot />} />
        </Routes>
      </Router>
     
      </div>
  );
}

export default App;
