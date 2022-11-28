import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import icon from "../assets/icon_receipt.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useDispatch } from "react-redux";
import { changeUser } from "../redux/userSlice";

const baseURL = `${process.env.BASE_URL}/Doai/Usuario/Autenticacao`;

const FormLogin = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [login, setlogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  
  
  const toastLoginInvalido = () => {
    toast({
      position: "top",
      title: "Erro: ",
      description: "login ou senha inválidos.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  

  //Chamada de Login
  async function fazerLogin() {
    //valida se os campos login e senha foram preenchidos
    if (login === "" || senha === "") {
      toastLoginInvalido()
      return
    }
    setLoading(true)
    
    await axios
      .post(`${baseURL}`, {login : login, senha: senha})
      .then((response) => {
        setTimeout(() => {
          dispatch(changeUser({name: login, token: response.data.token, logged: true}))
          toast({
            position: "top",
            title: "Bem Vindo! ",
            description: "login realizado com sucesso.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setLoading(false)
        }, 1000);
      })
      .catch((e) => {
        toastLoginInvalido()
        setLoading(false)
      })
  }

  //redireciona para tela de cadastro
  const toRegister = () => {
    navigate("/register");
  };

  const enter = (e) => {
    if (e.key == "Enter") fazerLogin()
  }


  return (
    <div className="form">
      <p className="form-title text-5xl text-corfonte font-texto font-bold">
        <div>
          <img src={icon} alt="Icone de recebimento " className="mr-1" />
        </div>
        <h4>doaí</h4>
      </p>
      <p className="text-center  font-semibold text-lg ">Doe suas notas fiscais e ajude pessoas!</p>
      <div className="w-10/12 h-auto grid gap-4">
        <Input
          placeholder="Login"
          size="md"
          onChange={(e) => setlogin(e.target.value)}
          value={login}
        />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
            onKeyDown={(e) => enter(e)}
            value={senha}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </div>
      <div className="my-5 w-10/12 flex justify-around">
        <Button
          bgColor={"#FFC011"}
          _hover={{ backgroundColor: "#ffd311" }}
          color="white"
          variant="solid"
          width={150}
          onClick={fazerLogin}
        >
          {!loading ? 'Login' : <Spinner color='blue.500' />}
        </Button>
        <Button
          colorScheme="cyan"
          variant="outline"
          width={150}
          marginLeft={5}
          onClick={toRegister}
        >
          Cadastrar
        </Button>
      </div>
      <Link to={"/home/instituicoes"}>
        <span className="underline">
          Quero doar sem fazer login
        </span> 
      </Link>
    </div>
  );
};

export default FormLogin;
