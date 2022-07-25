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
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";

export function ModalInstituicao() {
  const OverlayOne = () => (
    <ModalOverlay bg="rgba(7,183,222,.5)" backdropFilter="blur(1px)" />
  );
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const navigate = useNavigate()
  
  const confirmar = () => {
    navigate('/confirmacao')
  }

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        bg="#FFC011"
        color="white"
        width="80%"
      >
        Selecionar
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Deseja confirmar a doação para a instituição abaixo? </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>AACD</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} bg="#FFC011" color="white" m={4}>
              Não
            </Button>
            <Button onClick={confirmar} colorScheme="cyan" variant="outline">
              Sim, confirmar!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
