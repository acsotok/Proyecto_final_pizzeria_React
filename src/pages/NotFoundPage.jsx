import { Link } from "react-router-dom"


export const NotFoundPage = () => {
  return (
    <>
    <h1 style={{margin: "20px", color:"rgb(40, 130, 199)"}}>Parece que te perdiste</h1>
    <h4 style={{margin: "10px", color:"rgb(40, 130, 199)"}}>Con este botón puedes volver a la página principal:</h4>
    <br />
    <Link to="/">
    <button className="btn btn-primary">Vamos!</button>
    </Link>
    </>
  )
}
