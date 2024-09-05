import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../backend/firebase';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'; // Importar SweetAlert2
import './register.css'; // Crear y usar un nuevo archivo CSS para estilos específicos de registro

import imagen from "../../assets/register.jpg";

function Register({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);

      // Mostrar alerta de éxito
      Swal.fire({
        title: '¡Registro exitoso!',
        text: 'Te has registrado correctamente.',
        icon: 'success',
        confirmButtonText: 'Continuar'
      }).then(() => {
        navigate('/dashboard'); // Redirigir al dashboard después de cerrar la alerta
      });
      
    } catch (error) {
      // Mostrar alerta de error
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al registrarse: ' + error.message,
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="body-register register-container">
      <div className="register-box">
        <div className="register-left">
          <img src={imagen} alt="Farmers" className="register-image" />
        </div>
        <div className="register-right">
          <h2>Registrarse</h2>
          <p>Conéctate con los campesinos que llenan nuestra tierra de vida. ¡Descubre productos frescos, cultivados con amor y dedicación, directamente del campo a tu mesa!</p>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo"
                className="input-field"
              />
            </div>
            <div className="form-group password-input">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="input-field"
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
            <button type="submit" className="register-button">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
