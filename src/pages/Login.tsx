
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import FormLogin from '../components/FormLogin'
import bro from "../assets/bro.svg";

const Login = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.isLogged) {
      navigate('/home/instituicoes')
    }
  },[user.isLogged])

  return (
    <div className="login-content  bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="wrapper">
      <div className="login-form">
        <FormLogin />
      </div>
      <div className="login-image">
      <img
        src={bro}
        alt="Grupo de amigos de mãos dadas"
        className="login-image item"
      />
      </div>
      </div>


    </div>
  );
};

export default Login;
