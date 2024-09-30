import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const CardPizza = ({pizza}) => {
    const {addToCart} = useContext(CartContext)
  return (
    <Card style={{ width: '25rem', marginRight:'5px', marginBottom:'5px'}}>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body>
            <Card.Title>{pizza.id} {pizza.name}</Card.Title>
           {/*} <Card.Text>
                {pizza.desc}
            </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <Card.Text style={{fontSize:'15px',color:'gray'}}>
                    INGREDIENTES:
                </Card.Text>
                <Card.Text>
                🍕{pizza.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
                <Card.Title style={{fontSize:'20px', fontWeight:'bold', padding:'10px', color:"rgb(40, 130, 199)"}}>Precio: $ {pizza.price}</Card.Title>
                <Link to={`/pizza/${pizza.id}`} state={{ pizza }}>  <Button variant="outline-dark" style={{fontSize:'10px'}} >Ver más 👀 </Button>
                </Link>
                <Card.Link href="#"  className=''>  <Button onClick={() =>{
                    addToCart(pizza)
                }} 
                variant="dark" style={{fontSize:'10px'}}>Añadir 🛒 {addToCart} </Button></Card.Link>
            </ListGroup.Item>
        </ListGroup>
    </Card>
  )
}

CardPizza.propTypes = {
    img: PropTypes.string.isRequired,
    pizza: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

export default CardPizza