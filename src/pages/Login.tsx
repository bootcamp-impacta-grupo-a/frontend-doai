
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from '../components/FormLogin'
import bro from "../assets/bro.svg";



const Login = () => {
 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && localStorage.getItem("token") !== null) {
      navigate("/home");
    }
  }, [loading, navigate]);

  const login = (token: string) => {
    setLoading(true);
    if (token) {
      console.log(token)
      setTimeout(() => {
        localStorage.setItem("token", token);
        setLoading(false);
      }, 500);
    }
  };


  

  return (
    <div className="h-screen flex bg-gradient-to-r from-cyan-500 to-blue-500 justify-around items-center ">
      <FormLogin onPressLogin={(token) => login(token)}/>
      <img
        src={bro}
        alt="Grupo de amigos de mãos dadas"
        className="h-1/2 hidden md:block"
      />
    </div>
  );
};

export default Login;
