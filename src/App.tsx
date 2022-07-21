import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const PrivateRoute = ({ children, redirectTo }: any) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  console.log("isAuth: ", isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/">
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
