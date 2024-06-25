import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { PizzaContext } from "../context/ApiPizza";
import { formatoNumero } from "../assets/utils/formatoNumero";


function Home() {

    const { pizzas, carrito, agregarCarrito, limpiarCarrito, loading } = useContext(PizzaContext);

    const navigate = useNavigate();

    const irAPizza = (id) => {
        navigate(`/pizza/${id}`);
    };


    console.log("Valor de loading =", loading);

    return (

        <>
            {/* <div>
                <h1>Lectura en Pantalla de archivo .json</h1>
                <pre>{JSON.stringify(pizzas, null, 2)}</pre>
            </div> */}

            <div className="container-fluid mt-2">
                <div className="mb-1" style={{ msFlexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                   
                    <div className="container">
                        <div className="d-flex justify-content-end mb-1">
                        <Button className="btn btn-warning " onClick={limpiarCarrito}>
                            Limpiar Carrito
                        </Button>
                        </div>
                        <div >
                        <h2 className="text-end"><strong>Pizzas en Carrito: {carrito.length}</strong></h2>
                        </div>
                        <div className="row" >
                            {console.log("Valor ID =", { pizzas })}
                            {pizzas.map((pizza) => (
                                <div className="col-md-4" key={pizza.id}>
                                    <div className="card mb-4">
                                        <img src={pizza?.img} className="card-img-top" alt={pizza?.name} />
                                        <div className="card-body">
                                            <h5 className="card-title text-decoration-underline"><strong>{pizza?.name}</strong></h5><br></br>
                                            <h5 className="card-title text-start fs-6"><strong>Ingredientes:</strong></h5>
                                            <ul>
                                                {pizza.ingredients.map((ingredient, index) => (
                                                    <>
                                                        <li key={index} className="card-title text-start fs-6 ">🍕 {ingredient}</li>

                                                    </>
                                                ))}

                                            </ul>

                                            <p className="mt-2 card-text text-center fs-4"><strong>Valor: ${formatoNumero(pizza?.price)}</strong></p>
                                        </div>
                                        <row>
                                            <Button className="col-4 mt-1 btn-sm fw-bold text-white " variant="btn btn-info " onClick={() => irAPizza(pizza.id)}>
                                                Ver Más 👀
                                            </Button>
                                            <span></span> <span></span>
                                            <Button className="col-4 mt-1 btn-sm fw-bold text-white" variant="btn btn-danger" onClick={() => agregarCarrito(pizza)}>

                                                Añadir 🛒
                                            </Button>
                                        </row>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Home;

