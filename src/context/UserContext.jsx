/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();


const UserProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [error, setError] = useState("");
  
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem('token');
    try {
      return savedToken ? JSON.parse(savedToken) : null; 
    } catch (error) {
      console.error('Error parsing token:', error);
      return null; 
    }
  });

  const [email, setEmail] = useState(() => {
    const savedEmail = localStorage.getItem('email');
    try {
      return savedEmail ? JSON.parse(savedEmail) : ''
    } catch (error) {
      console.error('Error parsing email:', error);
      return ''
    }
  });

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('email', JSON.stringify(email));
  }, [token, email]);
  
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token); 
        setEmail(email); 
        console.log('Token enviado al backend en login:', data.token)
        return { success: true }; 
      } else {
        return { success: false, message: data.message || data.error || 'Error desconocido' }; 
      }
    } catch (error) {
      return { success: false, message: error.message }; 
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Token enviado al backend en registro:', data.token)
        return { success: true };
      } else {
        
        return { success: false, message: data.message || data.error || 'Error desconocido' };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };


  const getUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, email: data.email }; 
      } else {
        return { success: false, message: 'Error al obtener el perfil.' }; 
      }
    } catch (error) {
      return { success: false, message: error.message }; 
    }
  };  

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({
          cart,
        }),
      });

      console.log('Respuesta del servidor:', response);

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Error en la respuesta del servidor:', errorData);
        throw new Error(`Error en la compra: ${errorData || 'Respuesta no válida'}`);
      }

      const result = await response.json();
      console.log('Resultado de la compra:', result);

      setPurchaseSuccess(true);
      setError("");
    } catch (error) {
      console.error('Error durante la compra:', error);
      setError(error.message);
      setPurchaseSuccess(false);
    }
  };

  const logOut = () => {
    console.log('Token eliminado al cerrar sesión:', token)
    setToken(''); 
    setEmail(''); 
    localStorage.removeItem('token'); 
    localStorage.removeItem('email');
    console.log('Token eliminado'); 
  };

  return (
    <UserContext.Provider value={{ logOut, login, register, getUser, handleCheckout, cart, token, email, purchaseSuccess, error, setCart }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
