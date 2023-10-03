import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProducts from './pages/AddProducts';
import UpdateProducts from './pages/UpdateProducts';
import Logout from './pages/Logout';
import Profile from './pages/Profile';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './components/Login';
import ProductList from './pages/ProductList';


function App() {


  return (
    < >
      <Router>
        <NavBar />
        <Routes>

          <Route path='/' element={<ProtectedRoutes><ProductList /></ProtectedRoutes>} />
          <Route path='/add' element={<ProtectedRoutes><AddProducts /> </ProtectedRoutes>} />
          <Route path='/update/:id' element={<ProtectedRoutes><UpdateProducts /></ProtectedRoutes>} />
          <Route path='/logout' element={<ProtectedRoutes><Logout /></ProtectedRoutes>} />
          <Route path='/profile' element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
