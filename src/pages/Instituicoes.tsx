import { Input, InputGroup, InputRightElement, Select } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { Card } from "../components/Card";

export const Instituicoes = () => {
  const [paginaSelecionada, setPaginaSelecionada] = useOutletContext();
  const [nova, setNova] = useState("")
  const [municipios, setMunicipios] = useState([])
  const selectElement = useRef(null)

  useEffect(() => {
    setPaginaSelecionada(2);
  }, []);

   const buscarMunicipios =  async (uf) => {
     const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
     const listaMunicipios = await response.data.map(municipio => municipio.nome)
     setTimeout(() => {
       setMunicipios(listaMunicipios)
       setNova(uf)
    },2000)
  } 


  return (
    <div className="w-screen h-4/5 flex flex-col justify-start items-center mt-12">
      <h3 className="text-4xl font-bold font-texto mb-12">
        Escolha uma instituição para doar!
      </h3>
      <div className="w-11/12 h-4/5 bg-white flex flex-col justify-start items-center p-4 ">
        <div className="flex md:flex-row flex-col gap-4 w-5/6">
          <InputGroup size="md">
            <Input
              placeholder="Busque por nome CNPJ, Razão Social"
              size="md"
              bg="gray.100"
            />
            <InputRightElement width="4.5rem">
              <BsSearch color="#07B7DE" />
            </InputRightElement>
          </InputGroup>
          <Select
            placeholder="Estado"
            bg="gray.100"
            textColor="gray.400"
            color="#07B7DE"
            onChange={e => buscarMunicipios(e.target.value)}
            value={nova}
          >
            {estados.map((estado) => (
              <option key={estado.uf} value={estado.uf}>{estado.desc}</option>
            ))}
          </Select>
          <Select
            placeholder="Cidade"
            bg="gray.100"
            textColor="gray.400"
            color="#07B7DE"
            disabled={!nova}
          >
            {municipios.map((municipio) => (
              <option key={municipio} value={municipio}>{municipio}</option>
            ))}
          </Select>
        </div>
        <div className="w-full flex gap-4 flex-wrap overflow-y-auto mt-4">
          {instituicoes.map((inst, index) => <Card descricaoInstituicao={inst.desc} image={inst.imagem} nomeInstituicao={inst.nome} key={index}/>) }
        </div>
      </div>
    </div>
  );
};

const estados = [
  { uf: "AC", desc: "Acre" },
  { uf: "AL", desc: "Alagoas" },
  { uf: "AP", desc: "Amapá" },
  { uf: "AM", desc: "Amazonas" },
  { uf: "BA", desc: "Bahia" },
  { uf: "CE", desc: "Ceara" },
  { uf: "DF", desc: "Distrito Federal" },
  { uf: "ES", desc: "Espirito Santo" },
  { uf: "GO", desc: "Goiás" },
  { uf: "MA", desc: "Maranhão" },
  { uf: "MT", desc: "Mato Grosso" },
  { uf: "MS", desc: "Mato Grosso do Sul" },
  { uf: "MG", desc: "Minas Gerais" },
  { uf: "PA", desc: "Para" },
  { uf: "PB", desc: "Paraíba" },
  { uf: "PR", desc: "Paraná" },
  { uf: "PE", desc: "Pernambuco" },
  { uf: "PI", desc: "Piauí" },
  { uf: "RJ", desc: "Rio de Janeiro" },
  { uf: "RN", desc: "Rio Grande do Norte" },
  { uf: "RS", desc: "Rio Grande do Sul" },
  { uf: "RO", desc: "Rondônia" },
  { uf: "RR", desc: "Roraima" },
  { uf: "SC", desc: "Santa Catarina" },
  { uf: "SP", desc: "São Paulo" },
  { uf: "SE", desc: "Sergipe" },
  { uf: "TO", desc: "Tocantins" },
];

const instituicoes = [
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
  {
    imagem: 'https://yt3.ggpht.com/ytc/AKedOLS7Z9WLrOVdLKa_zSu_z2bHJ6jxmJkQFsGiF-RMmQ=s900-c-k-c0x00ffffff-no-rj',
    nome: 'AACD',
    desc: 'Uma Instituição para deficientes que promove a locomoção e melhora dos pacientes'
  },
]
