import { Button } from "@chakra-ui/button"
import { useNavigate } from "react-router-dom"


interface IPropsCard {
  id: number
  image: string
  nomeInstituicao: string
  descricaoInstituicao: string

}

export const Card = ({id, image,  nomeInstituicao, descricaoInstituicao}:IPropsCard) => {
  const navigate = useNavigate();


  const telaUpload = () =>{
    navigate(`/home/upload/${id}`);
  }
 
  return(
    <div className="w-80 flex-grow bg-white flex flex-col justify-around items-center shadow-lg " >
      <img className="w-full h-2/6 shadow-md" src={image} alt={nomeInstituicao} />
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