// styles
import './App.css';
// dependencies
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './UserContext';
// components
import Header from './Components/Header';
// import Footer from './Components/Footer';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
// pages
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import User from './Pages/User/User';
function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login/*' element={<Login />} />
            <Route exact path='/conta/*' element={<ProtectedRoute><User /></ProtectedRoute>} />
          </Routes>
          {/* <Footer /> */}
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
