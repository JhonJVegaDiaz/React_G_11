import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from './components/login/login';
import SignUpComponent from './components/signUp/signup';
import OrdenesComponent from './components/ordenes/ordenes';
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import CrearOrdenComponent from './components/crearOrden/crearOrden';
import EditarOrdenComponent from './components/editarOrden/editarOrden';
import TablaUsers from './mocks/data/TablaUsers';
import USERS from './mocks/users';
import { useState, useEffect } from 'react';

function App() {
  
  const [usersApi, setUsersApi] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/users')
    .then(response => response.json())
    .then(data => setUsersApi(data))
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/Login" element={<LoginComponent />} />
          <Route path="/SignUp" element={<SignUpComponent />} />
          <Route path="/ordenes" element={<OrdenesComponent />} />
          <Route path="/crearOrden" element={<CrearOrdenComponent />} />
          <Route path="/editarOrden" element={<EditarOrdenComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
