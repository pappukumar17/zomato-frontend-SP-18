import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/homepage/home';
import Contact from './components/contactus/contact';
import Signup from './components/homepage/header/signup/signup';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
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