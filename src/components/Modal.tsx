import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  useToast,
  Spinner
} from "@chakra-ui/react";
import { useState } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { selectUser } from "../redux/userSlice";
import { selectInstituicao } from "../redux/instituicao";

interface IProps {
  fotoCarregada: boolean
  file: any
  id: string
}

export function ModalInstituicao({fotoCarregada, file, id}: IProps) {
  const OverlayOne = () => (
    <ModalOverlay bg="rgba(7,183,222,.5)" backdropFilter="blur(1px)" />
  );
  const [loading, setLoading] = useState(false)
  const user = useSelector(selectUser);
  const instituicao = useSelector(selectInstituicao);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const navigate = useNavigate()
  
  const confirmar = () => {
    navigate('/confirmacao')
  }

  const enviarFoto = () => {
    setLoading(true)
    var formData = new FormData();
    formData.append("formDataList", file);
    axios.post(`${process.env.BASE_URL}/Doai/NotaFiscal/UploadNotas?idInstituicao=${id}`, formData,  {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${user.token}` 
    }
    }).then((response) => {
      toast({
        position: "top",
        title: "Obrigado! ",
        description: "Foto carregada com sucesso.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false)
      navigate('/confirmacao')
      
    })
    .catch((e) => {
      toast({
        position: "top",
        title: "Erro ao enviar a foto ",
        description: "selecione outra imagem",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false)
    })
  }

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        backgroundColor={fotoCarregada ? "#FFC011" : "gray"}
        _hover={{ backgroundColor: "#ffd311" }}
        color="white"
        variant="outline"
        width={300}
        marginLeft={5}
        disabled={!fotoCarregada}
      >
        {!loading ? 'Enviar Nota' : <Spinner color='blue.500' />}
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Deseja confirmar a doação para a instituição abaixo? </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{instituicao.name}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} bg="#FFC011" color="white" m={4}>
              Não
            </Button>
            <Button onClick={enviarFoto} colorScheme="cyan" variant="outline">
              Sim, confirmar!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
