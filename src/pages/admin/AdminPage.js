import React, {useEffect, useState} from "react";
import Modal from "../../components/Modal";
import './AdminPage.css';
import GoBackButton from "../../components/GoBackButton";
import {addStock, checkMachineOpen, checkService, getStock} from "../../service/api";

const AdminPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMachineOpen, setIsMachineOpen] = useState(false);
    const [originalAddedStock, setOriginalAddedStock] = useState(0);
    const [chocolateAddedStock, setChocolateAddedStock] = useState(0);
    const [strawberyAddedStock, setStrawberyAddedStock] = useState(0);
    const [originalActualStock, setOriginalActualStock] = useState(0);
    const [chocolateActualStock, setChocolateActualStock] = useState(0);
    const [strawberyActualStock, setStrawberyActualStock] = useState(0);

    useEffect(() => {
        checkMachineOpen().then(response => {
            setIsMachineOpen(response.isMachineOpen);
        })
    } ,[])

    useEffect(() => {
        getStock("stock_originals").then(response => {
            setOriginalActualStock(response.stock);
        })
        getStock("stock_chocolate").then(response => {
            setChocolateActualStock(response.stock);
        })
        getStock("stock_strawberry").then(response => {
            setStrawberyActualStock(response.stock);
        })
    }, [])

    const openModal = () => {
        checkMachineOpen().then(response => {
            setIsMachineOpen(response.isMachineOpen);
            if (response.isMachineOpen) {
                setIsModalOpen(true);
            } else {
                alert("Máquina cerrada");
            }
        })
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdateStock = () => {
        if (originalAddedStock > 0) {
            setOriginalActualStock(Number(originalActualStock) + Number(originalAddedStock));
            addStock(Number(originalAddedStock), "stock_originals").then(response => {
                console.log(response);
            })
        }
        if (chocolateAddedStock > 0) {
            setChocolateActualStock(Number(chocolateActualStock) + Number(chocolateAddedStock));
            addStock(Number(chocolateAddedStock), "stock_chocolate").then(response => {
                console.log(response);
            })
        }
        if (strawberyAddedStock > 0) {
            setStrawberyActualStock(Number(strawberyActualStock) + Number(strawberyAddedStock));
            addStock(Number(strawberyAddedStock), "stock_strawberry").then(response => {
                console.log(response);
            })
        }
    };

    const handleAddOriginalStock = (event) => {
        if (event.target.value >= 0) {
            setOriginalAddedStock(event.target.value);
        }
    }

    const handleAddChocolateStock = (event) => {
        if (event.target.value >= 0) {
            setChocolateAddedStock(event.target.value);
        }
    }

    const handleAddStrawberyStock = (event) => {
        if (event.target.value >= 0) {
            setStrawberyAddedStock(event.target.value);
        }
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
                <div style={{ height: '10%' }}/>
                <div className="stock-container">
                    <div className="actual-stock-originals">
                        Stock Actual Originales: {originalActualStock}
                    </div>
                    <div className="add-stock">
                        <div>
                            Agregar Stock:
                        </div>
                        <input
                            type="number"
                            placeholder=""
                            value={originalAddedStock}
                            onChange={handleAddOriginalStock}
                            min={0}
                            max={200 - originalActualStock}
                        />
                    </div>
                </div>
                <div className="stock-container">
                    <div className="actual-stock-chocolate">
                        Stock Actual Chocolate: {chocolateActualStock}
                    </div>
                    <div className="add-stock">
                        <div>
                            Agregar Stock:
                        </div>
                        <input
                            type="number"
                            placeholder=""
                            value={chocolateAddedStock}
                            onChange={handleAddChocolateStock}
                            min={0}
                            max={200 - chocolateActualStock}
                        />
                    </div>
                </div>
                <div className="stock-container">
                    <div className="actual-stock-strawberry">
                        Stock Actual Frutilla: {strawberyActualStock}
                    </div>
                    <div className="add-stock">
                        <div>
                            Agregar Stock:
                        </div>
                        <input
                            type="number"
                            placeholder=""
                            value={strawberyAddedStock}
                            onChange={handleAddStrawberyStock}
                            min={0}
                            max={200 - strawberyActualStock}
                        />
                    </div>
                </div>
                <button className="contained" onClick={handleUpdateStock}>Guardar Cambios</button>
            </Modal>
        </div>
    );
};

export default AdminPage;