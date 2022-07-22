import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  useToast,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import icon from "../assets/icon_receipt.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseURL = `https://localhost:44353/Doai/Usuario/NovoUsuario`;

function Cadastro() {
  const [show, setShow] = useState(false);
  const [nome, setNome] = useState("");
  const [login, setlogin] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [termos, setTermos] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();


  //Chamada de Cadastro
  async function Cadastrar() {
    //valida se os campos foram preenchidos
    if (nome == "" || login == "" || senha == "" || confirmaSenha == "" ) {
      toast({
        position: "top",
        title: "Erro! ",
        description: "Preencha todos os campos.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }
    if (senha !== confirmaSenha) {
      toast({
        position: "top",
        title: "Erro ",
        description: "As senhas estão diferentes",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }
    if (!termos) {
      toast({
        position: "top",
        title: "Erro ",
        description: "Aceite os termos de uso.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }

    await axios
      .post(`${baseURL}`,{
        nome:  nome,
        senha: senha,
        login: login
      })
      .then((response) => {
        setTimeout(() => {
          toast({
            position: "top",
            title: "Parabéns! ",
            description: "Cadastro realizado com sucesso.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          navigate('/')
        }, 1000);
      })
      .catch((e) => {

      })
  }


  return (
    <div className="h-screen flex bg-gradient-to-r from-cyan-500 to-blue-500 justify-around items-center ">
      <div className="h-3/4 w-10/12   lg:w-[30%] sm:w-6/12 py-4 flex flex-col bg-white rounded-md justify-around items-center">
        <p className="flex  text-5xl text-corfonte font-texto font-bold">
          <img src={icon} alt="Icone de recebimento " className="mr-1" /> doaí
        </p>
        <p className="text-center font-semibold text-lg ">Cadastre-se para doar!</p>

        <div className="w-10/12 h-auto grid gap-4">
          <Input
            placeholder="Nome"
            size="md"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
          <Input
            placeholder="login"
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
              value={senha}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                {show ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Confirmar senha"
              onChange={(e) => setConfirmaSenha(e.target.value)}
              value={confirmaSenha}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                {show ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <Checkbox colorScheme="green"   onChange={(e) => setTermos(e.target.checked)}>
          Aceito os Termos de Privacidade
        </Checkbox>
        <div className="w-10/12 flex justify-around mt-1">
          <Button
            bgColor={"#FFC011"}
            _hover={{ backgroundColor: "#ffd311" }}
            color="white"
            variant="solid"
            width={500}
            onClick={Cadastrar}
          >
            Cadastrar
          </Button>
        </div>
        <Link href="/"><span className="underline"> Voltar ao login</span></Link>
      </div>
    </div>
  );
}

export default Cadastro;
