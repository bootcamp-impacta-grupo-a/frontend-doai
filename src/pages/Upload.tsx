import { Button, Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DragNDrop } from "../components/DragNDrop";
import { FiAlertTriangle } from "react-icons/fi";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import InputFile from "../components/InputFile";
import axios from 'axios';
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";


export default function Upload() {
  const [isfotosCarregadas, setIsFotosCarregadas] = useState(false)
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)
  const [paginaSelecionada, setPaginaSelecionada] = useOutletContext();
  const user = useSelector(selectUser);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    setPaginaSelecionada(1)
  }, [])

  const enviarFoto = () => {
    setLoading(true)
    var formData = new FormData();
    formData.append("formData", file);
    axios.post('https://localhost:44353/Doai/NotaFiscal/UploadNota', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${user.token}` 
    }
    }).then((response) => {
      toast({
        position: "top",
        title: "Obrigado! ",
        description: "Foto carregada com sucesso.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false)
      navigate('/home/instituicoes')
      
    })
    .catch((e) => {
      toast({
        position: "top",
        title: "Erro ao enviar a foto ",
        description: "selecione outra imagem",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false)
    })
  }

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
          <Button
            backgroundColor={isfotosCarregadas ? "#FFC011" : "gray"}
            _hover={{ backgroundColor: "#ffd311" }}
            color="white"
            variant="outline"
            width={300}
            marginLeft={5}
            disabled={!isfotosCarregadas}
            onClick={enviarFoto}
          >
            {!loading ? 'Selecionar Instituição' : <Spinner color='blue.500' />}
          </Button>
        </div>
      </div>
    </>
  );
}
