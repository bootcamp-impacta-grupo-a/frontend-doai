import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DragNDrop } from "../components/DragNDrop";
import { FiAlertTriangle } from "react-icons/fi";
import { useOutletContext } from "react-router-dom";

export default function Upload() {
  const [fotosCarregadas, setFotosCarregadas] = useState(false)
  const [paginaSelecionada, setPaginaSelecionada] = useOutletContext();

  useEffect(() => {
    setPaginaSelecionada(1)
  }, [])

  return (
    <>
      <p className="text-4xl font-bold font-texto">
        Carregue suas notas fiscais
      </p>
      <div className="h-3/5 w-11/12 mt-4 rounded-xl flex flex-col justify-around items-center bg-white">
        <DragNDrop habilitarBotao={setFotosCarregadas} />
        <div className="flex justify-around w-full">
          <span className="flex">
            <FiAlertTriangle className="text-[#FFC011] mt-2 mr-2" />
            <p className="text-gray-300 text-xs mt-2 mr">
              Permitido apenas arquivos .JPG, .PNG, .PDF de até 10mb
            </p>
          </span>
          <Button
            backgroundColor={fotosCarregadas ? "#FFC011" : "gray"}
            _hover={{ backgroundColor: "#ffd311" }}
            color="white"
            variant="outline"
            width={300}
            marginLeft={5}
            disabled={!fotosCarregadas}
          >
            Selecionar Instituição
          </Button>
        </div>
      </div>
    </>
  );
}
