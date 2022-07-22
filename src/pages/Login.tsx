
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
      navigate('/home/upload')
    }
  },[user.isLogged])

  return (
    <div className="h-screen flex bg-gradient-to-r from-cyan-500 to-blue-500 justify-around items-center ">
      <FormLogin />
      <img
        src={bro}
        alt="Grupo de amigos de mãos dadas"
        className="h-1/2 hidden md:block"
      />
    </div>
  );
};

export default Login;
