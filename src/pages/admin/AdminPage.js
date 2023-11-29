import React, {useEffect, useState} from "react";
import Modal from "../../components/Modal";
import './AdminPage.css';
import GoBackButton from "../../components/GoBackButton";
import {addStock, getStock} from "../../service/api";

const AdminPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addedStock, setAddedStock] = useState(0);
    // pedirselo al back
    const [actualStock, setActualStock] = useState(50);

    useEffect(() => {
        getStock().then(response => {
            setActualStock(response.stock);
        })
    }, [])

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdateStock = () => {
        // Agrega aquí la lógica para actualizar el stock.
        setActualStock(Number(actualStock) + Number(addedStock));
        addStock(Number(addedStock)).then(response => {
            console.log(response);
        })
        // closeModal(); // Cierra el modal después de actualizar el stock.
    };

    const handleAddStock = (event) => {
        setAddedStock(event.target.value);
    }

    return (
        <div className="admin-page">
            <GoBackButton />
            <div className="admin-page-container">
                <h2>Panel de Administrador</h2>
                <button className="contained" onClick={openModal}>Actualizar Stock</button>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                <h2>Actualizar Stock</h2>
                {/* Agrega los campos y lógica necesarios para actualizar el stock en el modal */}
                <div className="stock-container">
                    <div className="actual-stock">
                        Stock Actual: {actualStock}
                    </div>
                    <div className="add-stock">
                        <div>
                            Agregar Stock:
                        </div>
                        <input
                            type="number"
                            placeholder=""
                            value={addedStock}
                            onChange={handleAddStock}
                            min={0}
                            max={200 - actualStock}
                        />
                    </div>
                </div>
                <button className="contained" onClick={handleUpdateStock}>Guardar Cambios</button>
            </Modal>
        </div>
    );
};

export default AdminPage;