import React from 'react'
import {useNavigate} from "react-router-dom";
import './LandingPage.css'

const LandingPage = () => {

    const navigate = useNavigate()

    return (
        <div className="landing">
            <div className="landing-container">
                <h1>EXPENDEDORA de OPERAS</h1>
                <button onClick={() => {navigate('/home')}} >User Login</button>
                <button onClick={() => {navigate('/admin-login')}} >Admin Login</button>
            </div>
        </div>
    )
}

export default LandingPage