import ReactDOM from "react-dom";
import StyledModal from "./index.style";

type ModalProps = {
  children: React.ReactNode,
  isOpen: boolean,
}

const Modal = ({children, isOpen}: ModalProps) => {
  return ReactDOM.createPortal(
    <StyledModal className={isOpen ? 'open' : ''}>{children}</StyledModal>,
    document.getElementById('modal') as HTMLElement
  )
}

export default Modal