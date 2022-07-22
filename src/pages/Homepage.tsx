import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DragNDrop } from "../components/DragNDrop";
import { Menu } from "../components/Menu";
import { FiAlertTriangle } from "react-icons/fi";
import { useDispatch } from "react-redux";

const Homepage = () => {
  const [fotosCarregadas, setFotosCarregadas] = useState(false)
  const dispatch = useDispatch()


  return (
    <div className="bg-[#EBF2F5] h-screen flex flex-col justify-center items-center">
      <Menu/>
      <p className="text-4xl font-bold font-texto">Carregue suas notas fiscais</p>
      <div className="h-3/5 w-11/12 mt-4 rounded-xl flex flex-col justify-around items-center bg-white">
        <DragNDrop habilitarBotao={setFotosCarregadas}/>
        <div className="flex justify-around w-full">
          <span className="flex">
          <FiAlertTriangle className="text-[#FFC011] mt-2 mr-2"/> 
          <p className="text-gray-300 text-xs mt-2 mr">Permitido apenas arquivos .JPG, .PNG, .PDF de até 10mb</p>
          </span>
          <Button
          backgroundColor={fotosCarregadas ? "#FFC011" : "lightgray"}
          color="white"
          variant="outline"
          width={300}
          marginLeft={5}
          >
            Selecionar Instituição
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;