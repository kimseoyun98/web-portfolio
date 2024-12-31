"use client";

import IconCheck from "@/app/ui/IconCheck";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

interface CustomModalProps {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ title, content }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        className="group inline-flex items-center justify-center"
        onClick={onOpen}
      >
        <IconCheck />
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{content}</ModalBody>
              <ModalFooter>
                <div onClick={onClose}>닫기</div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
