/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"

export const PizzaContext = createContext()

export const usePizza = () => useContext(PizzaContext);

export const PizzaProvider = ({children}) => {

    const [pizzas, setPizzas] = useState([])
    const [pizzaId, setPizzaId] = useState(null)
  
    const consultarPizza = async () => {
        try {
        const response = await fetch("http://localhost:5000/api/pizzas")
        const data = await response.json()
        //console.log(data)
        setPizzas(data)
        } catch (error){
            console.error(error)
        }
    }

    useEffect(() => {
        consultarPizza()
    }, [])

    const consultarPizzaId = async (id) => {
        try {
          const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
          if (!response.ok) throw new Error('Error al obtener la pizza');
          const data = await response.json();
          setPizzaId(data); 
        } catch (error){
            console.error(error)
        }
    };

    return (
        <PizzaContext.Provider value={{pizzas, pizzaId, consultarPizzaId}}>
            {children}
        </PizzaContext.Provider>
  )
}

