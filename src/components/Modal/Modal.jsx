import { Modal, Overlay } from "./Modal.styled";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector("#modal-root")

export default function ModalPic({ children ,closeModal }) {
    function onClose(e) {
     closeModal()
 }
    return (
         createPortal (<Overlay onClick={onClose}>
            <Modal >
               {children}
            </Modal>
        </Overlay>, modalRoot)
        
    );
};
 
ModalPic.propTypes = {
    children: PropTypes.element.isRequired,
    closeModal: PropTypes.func.isRequired
}