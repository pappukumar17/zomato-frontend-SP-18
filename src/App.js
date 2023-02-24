import './index.css';
import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './components/homepage/home';
import Contact from './components/contactus/contact';
import Signup from './components/homepage/header/signup/signup';
import { setAuthToken } from './components/homepage/header/login/loginForm';


function App() {

  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("token") ? flag = true : flag = false

    return flag
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;






















//type of components
//component lifecycle
//routers
// diffrence between jsx and js
//render HTML?
//js comonents in React