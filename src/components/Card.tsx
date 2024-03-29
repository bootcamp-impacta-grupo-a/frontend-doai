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
    <div className="card w-80 flex-grow  flex flex-col justify-around items-center  max-w-md" >
      <img className="card-image" src={`${process.env.BASE_URL}/Doai/NotaFiscal/RetornaNota/${idFoto}`} alt={nomeInstituicao} />
      <h4 className="font-bold text-lg">{nomeInstituicao}</h4>
      <p className="px-4">{descricaoInstituicao}</p>
      <Button
          bgColor={"#FFC011"}
          _hover={{ backgroundColor: "#ffd311" }}
          color="white"
          variant="solid"
          width={"80%"}
          marginLeft={5}
          onClick={telaUpload}
        >
          Fazer doação
        </Button>
    </div>
  )
}