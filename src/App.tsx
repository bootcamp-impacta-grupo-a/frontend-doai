import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Perfil  from "./pages/Perfil";
import Upload from "./pages/Upload";
import { Instituicoes } from "./pages/Instituicoes";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Cadastro />} />
        <Route path="/home"  element={<Home/>}>
          <Route path="perfil"  element={<Perfil/>}/>
          <Route path="upload"  element={<Upload/>}/>
          <Route path="instituicoes"  element={<Instituicoes/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
