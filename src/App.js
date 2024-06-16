// styles
import './App.css';
// dependencies
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components
import Header from './components/Header';
// pages
import Home from './pages/Home';
import Login from './pages/login/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login/*' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
