import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from './components/login/login';
import SignUpComponent from './components/signUp/signup';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/Login" element={<LoginComponent />} />
          <Route path="/SignUp" element={<SignUpComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App