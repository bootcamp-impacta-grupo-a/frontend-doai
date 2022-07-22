import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Cadastro from './pages/Cadastro'
import { useSelector } from 'react-redux'
import { selectUser } from "./redux/userSlice";


const PrivateRoute = ({ children, redirectTo }: any) => {
  const user = useSelector(selectUser)
  //const isAuthenticated = localStorage.getItem("token") !== null;
  //console.log("isAuth: ", isAuthenticated);
  return user.token != '' ? children : <Navigate to={redirectTo} />;
};

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Cadastro />} />
        <Route
          path="/homepage"
          element={
            <PrivateRoute redirectTo="/">
              <Homepage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
