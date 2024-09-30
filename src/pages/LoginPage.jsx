import { useContext, useState } from 'react';
//import {useNavigate} from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
  const {login} = useContext(UserContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  //const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false);
    setError2(false);

    if (!email.trim() || !password.trim()) {
        setError(true);
        return;
    }
    if (password.length < 6) {
        setError2(true);
        return;
    }

    login(email, password)
  };

  return (
    <div className="Login">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Usuario</label>
          <input 
            type="email" 
            className="form-control"
            placeholder="Ingresa tu correo"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="La contraseña debe tener al menos 6 caracteres"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        {error ? <p className="error">Todos los campos son obligatorios</p>: null}
        {error2 ? <p className="error">La contraseña debe tener al menos 6 caracteres</p>:null}
      </form>
    </div>
  );
};

export default LoginPage;