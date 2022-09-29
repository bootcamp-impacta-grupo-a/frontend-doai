import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Tabela } from "../components/Tabela";

export default function Historico() {
  const [paginaSelecionada, setPaginaSelecionada] = useOutletContext<any>();



  useEffect(() => {
    setPaginaSelecionada(3)
  }, [])

  return (
    <div className="w-screen h-4/5 flex flex-col justify-start items-center mt-12">
    <h3 className="text-4xl font-bold font-texto mb-12">
      Meu histórico de Doações
    </h3>
    <div className="flex w-2/6 justify-around mb-8">
      <div className="flex flex-col items-center ">
        <p className="text-5xl font-bold">5</p>
        <p className="font-medium">Total de Doações</p>
      </div>
      <div className="flex flex-col items-center ">
        <p className="text-5xl font-bold">18</p>
        <p className="font-medium">Total de Notas enviadas</p>
      </div>
      <div className="flex flex-col items-center ">
        <p className="text-5xl font-bold">R$5,23</p>
        <p className="font-medium">Valor em Reais</p>
      </div>
    </div>
    <div className="w-11/12 h-4/5 bg-white flex flex-col justify-start items-center p-4 rounded-lg">
      <div className="w-full flex gap-4 flex-wrap overflow-y-auto mt-4">
        <Tabela/>
      </div>
    </div>
  </div>
  );
}
