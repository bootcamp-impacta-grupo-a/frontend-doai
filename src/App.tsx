import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Perfil  from "./pages/Perfil";
import Upload from "./pages/Upload";
import { Instituicoes } from "./pages/Instituicoes";
import { Confirmacao } from "./pages/Confirmacao";
import Historico from "./pages/Historico";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "./helpers/local-storage";
import { changeUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);


  useEffect(() => {
    const userFromLocal = getFromLocalStorage('user');

    if (userFromLocal){
      setUser(userFromLocal)
      dispatch(
        changeUser(
        {
          name: userFromLocal.name,
          token: userFromLocal.token,
          logged: true
        }
        )
      )
    }
  }, []);

  return (
    <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Cadastro />} />
          <Route path="/confirmacao" element={<Confirmacao />} />
        
          <Route path="home" element={<Home />} >
            <Route path="perfil"  element={<Perfil/>}/>
            <Route path="upload/:id"  element={<Upload/>}/>
            <Route path="instituicoes"  element={<Instituicoes/>}/>
            <Route path="historico"  element={<Historico/>}/>
          </Route>

        </Routes>
  
    </BrowserRouter>
  )
}

const ProtectedRoute = ({ user, redirectPath = '/landing' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};


export default App
