import React from "react";
import ReactDOM from "react-dom";
import StyledModal from "./index.style";

type ModalTypes = {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
};

const Modal = ({ children, close, isOpen }: ModalTypes) => {
  return ReactDOM.createPortal(
    <StyledModal className={isOpen ? "open" : ""} onClick={close}>
      {children}
    </StyledModal>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
