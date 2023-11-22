import './Modal.css';
import {IoCloseOutline} from "react-icons/io5";

const Modal = ({ isOpen, onRequestClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="modal-close" onClick={onRequestClose}>
                    <IoCloseOutline size="1.8vw"/>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal