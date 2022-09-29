import { Avatar, Button, Input, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Perfil() {
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const toast = useToast();
  const [paginaSelecionada, setPaginaSelecionada] = useOutletContext<any>();



  const atualizarUsuario = () => {
    if (novaSenha !== confirmarSenha) {
      toast({
        position: "top",
        title: "Erro: ",
        description: " As senhas estão diferentes.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  };

  useEffect(() => {
    setPaginaSelecionada(5)
  }, [])

  return (
    <div className=" w-3/12 flex flex-col gap-8 justify-items-center ">
      <div className="w-full flex justify-center">
        <Avatar size={"2xl"} src="https://bit.ly/broken-link" />
      </div>
      <Input
        placeholder="Senha atual"
        size="md"
        onChange={(e) => setSenhaAtual(e.target.value)}
        value={senhaAtual}
        bg={"white"}
      />
      <Input
        placeholder="Nova senha"
        size="md"
        onChange={(e) => setNovaSenha(e.target.value)}
        value={novaSenha}
        bg={"white"}
      />
      <Input
        placeholder="Confirmar senha"
        size="md"
        onChange={(e) => setConfirmarSenha(e.target.value)}
        value={confirmarSenha}
        bg={"white"}
      />
      <Button
        bgColor={"#FFC011"}
        _hover={{ backgroundColor: "#ffd311" }}
        color="white"
        variant="solid"
        width={"100%"}
        onClick={atualizarUsuario}
      >
        Confirmar mudanças
      </Button>
    </div>
  );
}
