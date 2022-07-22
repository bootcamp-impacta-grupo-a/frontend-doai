import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu";

const Home = () => {
  const [paginaSelecionada, setPaginaSelecionada] = useState(1)

  return (
    <div className="bg-[#EBF2F5] h-screen flex flex-col justify-center items-center">
      <Menu menuAtual={paginaSelecionada}/>
      <Outlet context={[paginaSelecionada, setPaginaSelecionada]}/>
    </div> 
  );
};

export default Home;