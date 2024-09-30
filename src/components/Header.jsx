

const Header = () => {
  const buttonStyle = {fontSize:'30px'}
  const buttonStyle1 = {fontSize:'10px'}
  return(
    <header className="home">
      <section className='hero'>
        <div className="pizza text-white">
          <div className="contenedor">
            <h1 style={buttonStyle} >¡Pizzeria Mamma Mia!</h1>
            <p style={buttonStyle1} >¡Tenemos las mejores pizzas que puedas encontrar!</p>
          </div>
        </div>
      </section>
    </header>
  )
}
 
export default Header