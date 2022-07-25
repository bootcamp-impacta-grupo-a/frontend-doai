import { Button } from "@chakra-ui/button"
import { ModalInstituicao } from './Modal'

interface IPropsCard {
  image: string
  nomeInstituicao: string
  descricaoInstituicao: string

}

export const Card = ({image,  nomeInstituicao, descricaoInstituicao}:IPropsCard) => {
 
  return(
    <div className="w-80 h-[500] bg-white flex flex-col justify-around items-center shadow-lg " >
      <img className="w-full h-2/6 shadow-md" src={image} alt={nomeInstituicao} />
      <h3 className="font-bold text-lg">{nomeInstituicao}</h3>
      <p className="text-justify px-4">{descricaoInstituicao}</p>
      <ModalInstituicao/>
    </div>
  )
}