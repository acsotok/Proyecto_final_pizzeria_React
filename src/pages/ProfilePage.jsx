import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


export const ProfilePage = () => {
  const {logOut, getUser, token} = useContext(UserContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const handleLogout = () => {
    logOut(); 
    navigate('/login'); 
  };

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return; 
    }

    const loadUserData = async () => {
      const result = await getUser();
      if (result.success) {
        setUserData(result);
      } else {
        console.error(result.message);
        navigate('/login');
      }
    };

    loadUserData();
  }, [navigate, token, getUser]);

  if (!userData) {
    return <p>Cargando datos del usuario...</p>;
  }

  return (
    <div className='datosUsuario'>
      <div className='usuarioTexto'>
        <p style={{ marginBottom: '0px' }}><span style={{ fontWeight: 'bold' }}>Usuario: </span> {userData.email}</p>
        <Button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }} onClick={handleLogout}>Cerrar sesión</Button>
      </div>
    </div>
  );
}