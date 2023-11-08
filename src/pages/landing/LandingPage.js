import React from 'react'
import {useNavigate} from "react-router-dom";
import './LandingPage.css'

const LandingPage = () => {

    const navigate = useNavigate()

    return (
        <div className="landing">
            <div className="landing-container">
                <div className="landing-container-1">
                    <h1>EX</h1>
                    <h1>PEN</h1>
                    <h1>DE</h1>
                    <h1 className="heading">DORA</h1>
                    <div className="hover-box">
                        <span>La exploradora</span>
                    </div>
                </div>
                <div className="landing-container-2">
                    <button onClick={() => {navigate('/home')}} >Comprar Operas</button>
                    <button onClick={() => {navigate('/admin-login')}} >Ingresar como Administrador</button>
                </div>
            </div>
            <div className="landing-bottom-container">
                <h2>O</h2>
                <h2>P</h2>
                <h2>E</h2>
                <h2>R</h2>
                <h2>A</h2>
                <h2>S</h2>
            </div>
        </div>
    )
}

export default LandingPage