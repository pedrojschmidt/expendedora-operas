import React from 'react'
import {useNavigate} from "react-router-dom";
import './LandingPage.css'
import Video from "../../videos/background-video-2.mp4";

const LandingPage = () => {

    const navigate = useNavigate()

    return (
        <div className="landing">
            <video autoPlay muted loop className="background-video">
                <source src={Video} type="video/mp4"/>
            </video>
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
                    <button className="outlined" onClick={() => {navigate('/admin-login')}} >Ingresar como Administrador</button>
                    <button className="contained" onClick={() => {navigate('/home')}} >Comprar Operas</button>
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