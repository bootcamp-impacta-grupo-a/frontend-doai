import { Button, Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DragNDrop } from "../components/DragNDrop";
import { FiAlertTriangle } from "react-icons/fi";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import InputFile from "../components/InputFile";

import { useParams } from "react-router-dom";
import { ModalInstituicao } from '../components/Modal'


export default function Upload() {
  const [isfotosCarregadas, setIsFotosCarregadas] = useState(false)

  const [file, setFile] = useState(null)
  const [paginaSelecionada, setPaginaSelecionada] = useOutletContext<any>();
  
  let params = useParams();



  useEffect(() => {
    setPaginaSelecionada(1)
  }, [])

 

  return (
    <>
      <h3 className="text-4xl font-bold font-texto">
        Carregue suas notas fiscais
      </h3>
      <div className="h-3/5 w-11/12 mt-4 rounded-xl flex flex-col justify-around items-center bg-white">
        {/* <DragNDrop habilitarBotao={setFotosCarregadas} /> */}
        <InputFile habilitarBotao={setIsFotosCarregadas} carregarFotos={setFile}/>
        <div className="flex justify-around w-full">
          <span className="flex">
            <FiAlertTriangle className="text-[#FFC011] mt-2 mr-2" />
            <p className="text-gray-300 text-xs mt-2 mr">
              Permitido apenas arquivos .JPG, .PNG, .PDF de até 10mb
            </p>
          </span>
          <ModalInstituicao fotoCarregada={isfotosCarregadas} file={file} id={params.id}/>
        </div>
      </div>
    </>
  );
}
