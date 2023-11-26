import './HomePage.css'
import GoBackButton from "../../components/GoBackButton";
import React, {useState} from "react";
import Modal from "../../components/Modal";
import {buy} from "../../service/api";

const HomePage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [originalActualStock, setOriginalActualStock] = useState(50);
    const [chocolateActualStock, setChocolateActualStock] = useState(20);
    const [strawberyActualStock, setStrawberyActualStock] = useState(30);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const sendMessageToMQTTTopic = (topic) => {
        // client.publish(topic, topic+'comprar'); // Envía el mensaje al topic MQTT
        buy(topic).then(response => {
            console.log(response);
        })
    };

    const handleOriginalPurchase = () => {
        if (originalActualStock > 0) {
            setOriginalActualStock(Number(originalActualStock) - Number(1));
            sendMessageToMQTTTopic('OPERAS/original');
        } else {
            alert("No hay stock de Opera Original");
        }
    };

    const handleChocolatePurchase = () => {
        if (chocolateActualStock > 0) {
            setChocolateActualStock(Number(chocolateActualStock) - Number(1));
            sendMessageToMQTTTopic('OPERAS/chocolate');
        } else {
            alert("No hay stock de Opera Chocolate");
        }
    };

    const handleStrawberyPurchase = () => {
        if (strawberyActualStock > 0) {
            setStrawberyActualStock(Number(strawberyActualStock) - Number(1));
            sendMessageToMQTTTopic('OPERAS/strawbery');
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