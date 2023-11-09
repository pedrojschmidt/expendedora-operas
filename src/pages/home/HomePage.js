import './HomePage.css'
import GoBackButton from "../../components/GoBackButton";
import React from "react";

const HomePage = () => {

    return(
        <div className="home">
            <GoBackButton />
            <div className="admin-login">
                <h2>Comprar Operas</h2>
                <button className="contained">Comprar</button>
            </div>
        </div>
    )
}

export default HomePage