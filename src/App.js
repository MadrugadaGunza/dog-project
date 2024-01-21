// styles
import './App.css';
// dependencies
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components
import Header from './Components/Header';
import Footer from './Components/Footer';
// pages
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import { UserStorage } from './UserContext';
function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login/*' element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
