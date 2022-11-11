import { SearchIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { FC, useRef } from "react";

const SearchModal: FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const elementRefToFocus = useRef(null);
  return (
    <Modal
      isOpen={isOpen}
      initialFocusRef={elementRefToFocus}
      onClose={onClose}
      closeOnEsc={true}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Search Something</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InputGroup colorScheme={"brand"} >
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              ref={elementRefToFocus}
              type="text"
              placeholder="What are you looking for..."
            />
          </InputGroup>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default SearchModal;
