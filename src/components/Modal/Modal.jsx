import { Modal, Overlay } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root")

export default function ModalPic({ children }) {
 
    return (
         createPortal (<Overlay>
            <Modal >
               {children}
            </Modal>
        </Overlay>, modalRoot)
        
    );
};
