import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import pessoal from '../assets/pana.svg'
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

export const Confirmacao = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser);

  const novaDoacao = () => navigate('/home/instituicoes')
  const minhasDoacoes = () => navigate('/home/historico')

  return (
    <div className="w-screen h-screen bg-[#EBF2F5] flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-8 justify-center items-center w-3/6">
      <img src={pessoal} alt="grupo de amigos agradecendo!" className="w-1/2"/>
      <h3 className="font-semibold text-3xl">Obrigado pela sua doação!</h3>
      <div className="flex justify-around">
      {user.isLogged && (
        <Button  onClick={minhasDoacoes} colorScheme="cyan" variant="outline" mr={8} >
          Ver minhas doações 
        </Button>
      )}
        <Button onClick={novaDoacao} bg="#FFC011" color="white">
          Fazer outra doação
        </Button>
      </div>
      </div>
    </div>
  );
};
