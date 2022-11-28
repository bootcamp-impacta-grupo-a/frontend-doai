import { Button } from "@chakra-ui/button"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


interface IPropsCard {
  id: number
  image: string
  nomeInstituicao: string
  descricaoInstituicao: string

}

export const Card = ({id, image,  nomeInstituicao, descricaoInstituicao}:IPropsCard) => {
  const navigate = useNavigate();
  const [idFoto, setIdFoto] = useState(0);


  useEffect(() => {
    axios.get(`${process.env.BASE_URL}/Doai/NotaFiscal/RetornaNotasInstituicao?idInstituicao=${id}`)
      .then(res => res.data)
      .then(data => setIdFoto(data[0].id))
  }, []);

  const telaUpload = () =>{
    navigate(`/home/upload/${id}`);
  }
 
  return(
    <div className="w-80 flex-grow bg-white flex flex-col justify-around items-center shadow-lg  max-w-md" >
      <img className="w-full h-2/6 shadow-md" src={`${process.env.BASE_URL}/Doai/NotaFiscal/RetornaNota/${idFoto}`} alt={nomeInstituicao} />
      <h3 className="font-bold text-lg">{nomeInstituicao}</h3>
      <p className="text-justify px-4">{descricaoInstituicao}</p>
      <Button
          bgColor={"#FFC011"}
          _hover={{ backgroundColor: "#ffd311" }}
          color="white"
          variant="solid"
          width={"80%"}
          marginLeft={5}
          onClick={telaUpload}
        >
          Selecionar
        </Button>
    </div>
  )
}