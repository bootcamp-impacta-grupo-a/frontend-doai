import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Tabela = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple w={'100%'}>
      <AccordionItem>
        <h2>
          <AccordionButton bg={'#e5f4ff'} flex='1' justifyContent={'center'} h={'70px'}>
              <p className="bg-white w-[10%] text-center text-sm"> 15 de dezembro 2020</p>
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <ul className="">
            <li className="flex  justify-between w-full border-b-2 h-12 items-center">
              <p className="text-1xl font-medium">AACD <Link className="text-cyan-400 underline ml-8" to='#'>Doar Novamente</Link></p>
              <p>1 Doação | 3 Notas Recebidas <Link className="text-cyan-400 underline ml-8" to='#'>Ver Notas</Link></p>
            </li>
            <li className="flex  justify-between w-full border-b-2 h-12 items-center">
              <p className="text-1xl font-medium">AACD <Link className="text-cyan-400 underline ml-8" to='#'>Doar Novamente</Link></p>
              <p>1 Doação | 3 Notas Recebidas <Link className="text-cyan-400 underline ml-8" to='#'>Ver Notas</Link></p>
            </li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton bg={'#e5f4ff'} flex='1' justifyContent={'center'} h={'70px'}>
              <p className="bg-white w-[10%] text-center text-sm"> 14 de dezembro 2020</p>
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <ul className="">
            <li className="flex  justify-between w-full border-b-2 h-12 items-center">
              <p className="text-1xl font-medium">AACD <Link className="text-cyan-400 underline ml-8" to='#'>Doar Novamente</Link></p>
              <p>1 Doação | 3 Notas Recebidas <Link className="text-cyan-400 underline ml-8" to='#'>Ver Notas</Link></p>
            </li>
            <li className="flex  justify-between w-full border-b-2 h-12 items-center">
              <p className="text-1xl font-medium">AACD <Link className="text-cyan-400 underline ml-8" to='#'>Doar Novamente</Link></p>
              <p>1 Doação | 3 Notas Recebidas <Link className="text-cyan-400 underline ml-8" to='#'>Ver Notas</Link></p>
            </li>
            <li className="flex  justify-between w-full border-b-2 h-12 items-center">
              <p className="text-1xl font-medium">AACD <Link className="text-cyan-400 underline ml-8" to='#'>Doar Novamente</Link></p>
              <p>1 Doação | 3 Notas Recebidas <Link className="text-cyan-400 underline ml-8" to='#'>Ver Notas</Link></p>
            </li>
            <li className="flex  justify-between w-full border-b-2 h-12 items-center">
              <p className="text-1xl font-medium">AACD <Link className="text-cyan-400 underline ml-8" to='#'>Doar Novamente</Link></p>
              <p>1 Doação | 3 Notas Recebidas <Link className="text-cyan-400 underline ml-8" to='#'>Ver Notas</Link></p>
            </li>
            <li className="flex  justify-between w-full border-b-2 h-12 items-center">
              <p className="text-1xl font-medium">AACD <Link className="text-cyan-400 underline ml-8" to='#'>Doar Novamente</Link></p>
              <p>1 Doação | 3 Notas Recebidas <Link className="text-cyan-400 underline ml-8" to='#'>Ver Notas</Link></p>
            </li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
