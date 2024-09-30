import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"

const RegisterPage = () => {
    
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [confirmContraseña, setConfirmar] = useState("")
    const {register} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
            register( email, contraseña);
    };
    
    return(
        <>
            <h3 className="registro">¡Regístrate en nuestra página para obtener descuentos!</h3>
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="text"
                        name = "email"
                        className="form-control"
                        placeholder="Ingresa tu email"
                        onChange={(e) => (setEmail(e.target.value))}
                        value={email}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label>Contraseña</label>
                    <input 
                        type="password"
                        name = "contraseña"
                        className="form-control"
                        placeholder="Ingresa tu contraseña"
                        onChange={(e) => (setContraseña(e.target.value))}
                        value={contraseña}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label>Confirmar Contraseña</label>
                    <input 
                        type="password"
                        name = "confirmContraseña"
                        className="form-control"
                        placeholder="Confirma tu contraseña"
                        onChange={(e) => (setConfirmar(e.target.value))}
                        value={confirmContraseña}
                    />
                </div>
                <br />
                <button type="submit" className="btn btn-primary" >Registrarse</button>
            </form>
        </>
    )
}

export default RegisterPage