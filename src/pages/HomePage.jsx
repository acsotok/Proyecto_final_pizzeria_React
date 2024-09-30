import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import CardPizza from '../components/CardPizza';
import Header from '../components/Header';
import { PizzaContext } from '../context/PizzaContext';


const HomePage = () => {
    const {pizzas} = useContext(PizzaContext)

    return(
        <>
        <Header />
        <Container>
            <Row className='mt-4'>   
                {pizzas.map(pizza => <CardPizza pizza = {pizza} key={pizza}/>)}
            </Row>
        </Container>
        </>
    )
}


export default HomePage

