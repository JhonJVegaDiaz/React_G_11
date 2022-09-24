import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from './components/login/login';
import SignUpComponent from './components/signUp/signup';
import OrdenesComponent from './components/ordenes/ordenes';
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import CrearOrdenComponent from './components/crearOrden/crearOrden';
import EditarOrdenComponent from './components/editarOrden/editarOrden';

function App() {
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
