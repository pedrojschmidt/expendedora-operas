import React, { useState } from 'react';
import './AdminLoginPage.css'
import {useNavigate} from "react-router-dom";

const AdminLoginPage = () => {

    const navigate = useNavigate()
    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (password === 'fer-capo') {
            navigate('/admin')
        } else {
            alert('Contraseña incorrecta. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="admin-login-background">
            <div className="admin-login">
                <h2>Iniciar sesión como administrador</h2>
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button onClick={handleLogin}>Ingresar</button>
            </div>
        </div>
    );
};

export default AdminLoginPage;
