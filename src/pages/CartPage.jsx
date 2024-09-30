import { useContext} from "react"
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import { UserContext } from "../context/UserContext"


const CartPage = () => {
  const {cart, addToCart, removeFromCart, getTotal} = useContext (CartContext)
  const {token, handleCheckout, purchaseSuccess, error} = useContext(UserContext)
  

  return (
    <>
      <Container>
        <h2 className="my-4" style={{color:"rgb(40, 130, 199)"}}>Tu Carrito</h2>
        {cart.length === 0 ? (
          <>
            <p>El carrito está vacío.</p>
            <Button 
              type="submit" 
              className="btn btn-primary" 
              disabled={true}
            >
              Pagar 
            </Button>
          </>
        ) : (
          <>
            {!token && (
            <div style={{ color: "red", paddingTop: "1rem", padding:"2rem", paddingLeft:"5rem" , fontSize:"30px", fontWeight:"bolder" }}>
              Debes iniciar sesión para realizar tu compra.
            </div>
          )}
            {cart.map(pizza => (
              <Card key={pizza.id} className="mb-3">
                <Row className="no-gutters">
                  <Col md={4}>
                    <Image src={pizza.img} alt={pizza.name} fluid />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{pizza.name}</Card.Title>
                      <Card.Text>
                        Precio: ${pizza.price}
                        <br />
                        Cantidad: {pizza.quantity}
                      </Card.Text>
                      <Button variant="danger" onClick={() => removeFromCart(pizza.id)} className="me-2">-</Button>
                      <Button variant="success" onClick={() => addToCart(pizza)}>+</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
            <h3 style={{color:"rgb(40, 130, 199)"}}>Total: ${getTotal()}</h3>
            <br />
            <Button 
              type="submit" 
              className="btn btn-primary" 
              onClick={handleCheckout}
              disabled={!token}
            >
                  Pagar 
            </Button>
            {purchaseSuccess && (
            <div style={{ color: "green", paddingTop: "1rem", padding:"2rem", paddingBottom:"3rem", paddingLeft:"5rem" , fontSize:"30px", fontWeight:"bolder" }}>
              Compra realizada con éxito!
            </div>
          )}
          {error && (
            <div style={{ color: "red", marginTop: "1rem" }}>
              {error}
            </div>
          )}
          </>
        )}
      </Container>
    </>
    
  )
}

export default CartPage