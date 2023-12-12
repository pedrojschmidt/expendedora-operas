import './HomePage.css'
import GoBackButton from "../../components/GoBackButton";
import React, {useEffect, useState} from "react";
import Modal from "../../components/Modal";
import {buy, checkService, getStock} from "../../service/api";

const HomePage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInService, setIsInService] = useState(false);
    const [originalActualStock, setOriginalActualStock] = useState(0);
    const [chocolateActualStock, setChocolateActualStock] = useState(0);
    const [strawberyActualStock, setStrawberyActualStock] = useState(0);

    // const [serviceAux, setServiceAux] = useState(false);

    useEffect(() => {
        checkService().then(response => {
            setIsInService(response.inService);
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
        // setServiceAux(!serviceAux)
        checkService().then(response => {
            setIsInService(response.inService);
            if (response.inService) {
                setIsModalOpen(true);
            } else {
                alert("Servicio no disponible");
            }
        })
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const buyOperas = (type, topic) => {
        buy(type, topic).then(response => {
            console.log(response);
        })
    };

    const handleOriginalPurchase = () => {
        if (originalActualStock > 0) {
            setOriginalActualStock(Number(originalActualStock) - Number(1));
            buyOperas('stock_originals', 'OPERAS/originals/bought');
        } else {
            alert("No hay stock de Opera Original");
        }
    };

    const handleChocolatePurchase = () => {
        if (chocolateActualStock > 0) {
            setChocolateActualStock(Number(chocolateActualStock) - Number(1));
            buyOperas('stock_chocolate', 'OPERAS/chocolate/bought');
        } else {
            alert("No hay stock de Opera Chocolate");
        }
    };

    const handleStrawberyPurchase = () => {
        if (strawberyActualStock > 0) {
            setStrawberyActualStock(Number(strawberyActualStock) - Number(1));
            buyOperas('stock_strawberry', 'OPERAS/strawberry/bought');
        } else {
            alert("No hay stock de Opera Frutilla");
        }
    };

    return(
        <div className="home">
            <GoBackButton />
            <div className="admin-login">
                <h2>Comprar Operas</h2>
                <button className="contained" onClick={openModal}>Comprar</button>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                <h2>Comprar</h2>
                {/* Agrega los campos y lógica necesarios para actualizar el stock en el modal */}
                <div className="variety-conatiner">
                    <div className="variety">
                        <div className="variety-name" style={{ backgroundColor: '#888' }}>
                            Opera Original
                        </div>
                        <div className="variety-stock">
                            Stock: {originalActualStock}
                        </div>
                        <button className="contained" onClick={handleOriginalPurchase}>Comprar</button>
                    </div>
                    <div className="variety">
                        <div className="variety-name" style={{ backgroundColor: '#482d23' }}>
                            Opera Chocolate
                        </div>
                        <div className="variety-stock">
                            Stock: {chocolateActualStock}
                        </div>
                        <button className="contained" onClick={handleChocolatePurchase}>Comprar</button>
                    </div>
                    <div className="variety">
                        <div className="variety-name" style={{ backgroundColor: '#ce6aa1' }}>
                            Opera Frutilla
                        </div>
                        <div className="variety-stock">
                            Stock: {strawberyActualStock}
                        </div>
                        <button className="contained" onClick={handleStrawberyPurchase}>Comprar</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default HomePage