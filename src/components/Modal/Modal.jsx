import { Modal, Overlay } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root")

export default function ModalPic({ children, onClick }) {
 
    return (
         createPortal (<Overlay>
            <Modal >
               < img src="" alt=""/>
            </Modal>
        </Overlay>, modalRoot)
        
    );
};
