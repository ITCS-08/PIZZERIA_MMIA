import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, createContext } from "react";

export const PizzaContext = createContext();

export const PizzaProvider = ({children}) => {
    
    const URL = '/pizzas.json';
    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchPizzas = async () => {
            try {

                const response = await fetch(URL);
                const data = await response.json();
                // Establece pizzas con los datos de estas obtenidos
                setPizzas(data);
                setLoading(false);
            } catch (error) {
                console.error("Error al cargar Pizzas:", error);
            }
        };

        fetchPizzas();
    }, []);

 
    const agregarCarrito = (pizza) => {
        setCarrito((prevCarrito) => {
            const pizzaExistente = prevCarrito.find(item => item.id === pizza.id);
            if (pizzaExistente) {
                return prevCarrito.map(item =>
                    item.id === pizza.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            } else {
                return [...prevCarrito, { ...pizza, cantidad: 1 }];
            }
        });
    };
    
    const totalPrecio = carrito.reduce((total, pizza) => total + pizza.price, 0);

    const limpiarCarrito = () => {
        setCarrito([]);
        totalPrecio(0);
    };


    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        
            <PizzaContext.Provider value={{ pizzas, carrito, agregarCarrito, limpiarCarrito, totalPrecio, loading }}>
                {children}
            </PizzaContext.Provider>      
        
    );
}
