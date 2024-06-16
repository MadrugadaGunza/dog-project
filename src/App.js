// styles
import './App.css';
// dependencies
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './UserContext';
// components
import Header from './components/Header';
// pages
import Home from './pages/Home';
import Login from './pages/login/Login';
import User from './pages/user/User';
import ProtectedRouter from './helpers/ProtectedRouter';


function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login/*' element={<Login />} />
            <Route path='/conta/*' element={
              <ProtectedRouter>
                <User />
              </ProtectedRouter>
            }
            />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
