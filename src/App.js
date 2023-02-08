import React from 'react';
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/homepage/home'
import Contact from './components/contactus/contact';
import Navbar from './components/common/navbar/navbar';
// import Loader from './components/common/loader/loader';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Loader/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/navbar' element={<Navbar />} />
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