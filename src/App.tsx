import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Cadastro from './pages/Cadastro'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Cadastro />} />
        <Route path="/homepage"  element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
