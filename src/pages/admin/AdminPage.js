import {useState} from "react";
import Modal from "../../components/Modal";

const AdminPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdateStock = () => {
        // Agrega aquí la lógica para actualizar el stock.
        closeModal(); // Cierra el modal después de actualizar el stock.
    };

    return (
        <div className="admin-page">
            <h1>Panel de Administrador</h1>
            <button onClick={openModal}>Actualizar Stock</button>

            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                <h2>Actualizar Stock</h2>
                {/* Agrega los campos y lógica necesarios para actualizar el stock en el modal */}
                <button onClick={handleUpdateStock}>Guardar Cambios</button>
                <button onClick={closeModal}>Cancelar</button>
            </Modal>
        </div>
    );
};

export default AdminPage;