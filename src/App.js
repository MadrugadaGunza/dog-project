import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import { UserStorage } from './UserContext';
function App() {
  return (
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
  );
}

export default App;
