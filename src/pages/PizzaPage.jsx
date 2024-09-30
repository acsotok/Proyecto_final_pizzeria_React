/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const PizzaPage = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const {pizzaId, consultarPizzaId} = useContext(PizzaContext)
    const {addToCart} = useContext(CartContext)

    useEffect(() => {
        consultarPizzaId(id)
    },[id]
    )

    if (!pizzaId) return <p>No se encontró la pizza</p>;

    return(
        <Card style={{ width: '35rem', marginRight:'5px', marginBottom:'5px'}}>
        <Card.Img variant="top" src={pizzaId.img} />
        <Card.Body>
            <Card.Title>{pizzaId.id} {pizzaId.name}</Card.Title>
            <Card.Text>
                {pizzaId.desc}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <Card.Text style={{fontSize:'15px',color:'gray'}}>
                    INGREDIENTES:
                </Card.Text>
                <Card.Text>
                🍕{pizzaId.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
                <Card.Title style={{fontSize:'20px', fontWeight:'bold', padding:'10px', color:"rgb(40, 130, 199)"}}>Precio: $ {pizzaId.price}</Card.Title>
                <Card.Link href="#" className=''>  <Button onClick={() => navigate(-1)} variant="outline-dark" style={{fontSize:'10px'}} >Volver </Button></Card.Link>
                <Card.Link href="#"  className=''>  <Button onClick={() => addToCart(pizzaId)} variant="dark" style={{fontSize:'10px'}}>Añadir 🛒 </Button></Card.Link>
            </ListGroup.Item>
        </ListGroup>
    </Card>
    )
}

PizzaPage.propTypes = {
    img: PropTypes.string.isRequired,
    pizza: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

export default PizzaPage