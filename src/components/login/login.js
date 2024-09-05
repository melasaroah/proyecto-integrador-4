import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../backend/firebase';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './login.css';

import imagen from "../../assets/campesino.jpg";
import Swal from 'sweetalert2';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);

      // Mostrar alerta de éxito
      Swal.fire({
        title: '¡Bienvenido!',
        text: 'Has iniciado sesión correctamente',
        icon: 'success',
        confirmButtonText: 'Continuar'
      }).then(() => {
        navigate('/dashboard'); // Redirigir al dashboard después de cerrar la alerta
      });

    } catch (error) {
      // Mostrar alerta de error
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al iniciar sesión: ' + error.message,
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="body-login login-container">
      <div className="login-box">
        <div className="login-left">
          <h1>Bienvenido!</h1>
          <p>Conéctate con los campesinos que llenan nuestra tierra de vida. ¡Descubre productos frescos, cultivados con amor y dedicación, directamente del campo a tu mesa!</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingrese su email"
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
            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">¿Has olvidado tu contraseña?</a>
            </div>
            <button type="submit" className="login-button">Iniciar Sesión</button>
            <div className="sign-up">
                ¿No tienes una cuenta? <button onClick={() => navigate('/register')} className="sign-up-link">Registrate</button>
            </div>
          </form>
        </div>
        <div className="login-right">
          <img src={imagen} alt="Campesino" className="login-image" />
        </div>
      </div>
    </div>
  );
}

export default Login;
