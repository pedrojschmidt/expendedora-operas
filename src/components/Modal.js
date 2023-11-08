
const Modal = ({ isOpen, onRequestClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="modal-close" onClick={onRequestClose}>
                    Cerrar
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal