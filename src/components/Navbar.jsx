import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const  Navegation = () => {
    const {getTotal} = useContext(CartContext);
    const { logOut, token} = useContext(UserContext);
    const navigate = useNavigate()
    const buttonStyle = {fontSize:'10px'}

    const handleLogout = () => {
        logOut(); 
        navigate('/'); 
        console.log("Token después de logout:", token) 
    };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home" className="text-white">Pizzería Mamma Mia!</Navbar.Brand>
            <Nav className="me-auto " >
                <NavLink to="/" ><Button className="p-2" variant="outline-light" style={buttonStyle}> 🍕 Home</Button> </NavLink>
                {!token ? (
                    <>
                        <NavLink to="/login">
                            <Button variant="outline-light" style={buttonStyle}>
                                🔒 Login 
                            </Button>
                        </NavLink>
                        <NavLink to="/register" >
                            <Button variant="outline-light" style={buttonStyle}>
                                🔒 Register
                            </Button>
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/Profile" >
                            <Button variant="outline-light" style={buttonStyle}>
                                🔒 Profile
                            </Button>
                        </NavLink>
                        <Button onClick={handleLogout} variant="outline-light" style={buttonStyle}>
                            🔒 Logout 
                        </Button>
                    </>
                )}
            </Nav>
        </Container>
            <Form className="p-2 ms-auto">
                <NavLink to="/cart" ><Button variant="outline-info" style={buttonStyle}> 🛒 Total: ${getTotal()}</Button>
                </NavLink>
            </Form>
    </Navbar>
  )
}

export default Navegation