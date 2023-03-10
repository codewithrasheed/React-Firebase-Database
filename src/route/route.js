
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../screen/login';
import Signup from '../screen/signup';
import Home from '../screen/home';

const Approute = () => {
  return (
    <>
    <Router>
        
        <Routes>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='/' element={<Signup />} />
        </Routes>
    </Router>
    </>
  )
}

export default Approute