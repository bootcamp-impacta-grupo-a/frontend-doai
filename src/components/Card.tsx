import { Button } from "@chakra-ui/button"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { changeInstituicao } from "../redux/instituicao";


interface IPropsCard {
  id: number
  image: string
  nomeInstituicao: string
  descricaoInstituicao: string

}

export const Card = ({id, image,  nomeInstituicao, descricaoInstituicao}:IPropsCard) => {
  const navigate = useNavigate();
  const [idFoto, setIdFoto] = useState(0);
  const dispatch = useDispatch();


  useEffect(() => {
    axios.get(`${process.env.BASE_URL}/Doai/NotaFiscal/RetornaNotasInstituicao?idInstituicao=${id}`)
      .then(res => res.data)
      .then(data => setIdFoto(data[0].id))
  }, []);

  const telaUpload = () =>{
    dispatch(changeInstituicao({name: nomeInstituicao }))
    navigate(`/home/upload/${id}`);
  }
 
  return(
    <div className="card" >
      <div className="h-40">
        <img className="w-80 h-full shadow-md" src={image} alt={nomeInstituicao} />
      </div>
      
      <h3 className="font-bold text-lg mt-5">{nomeInstituicao}</h3>
      <p className="text-justify px-4 mb-5">{descricaoInstituicao}</p>
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