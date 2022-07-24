import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";


export const Instituicoes = () => {
  const [paginaSelecionada, setPaginaSelecionada] = useOutletContext();

  useEffect(() => {
    setPaginaSelecionada(2)
  }, [])

  
  return (
    <div>
      Bem vindo a istituições
    </div>
  )
}