import { useContext, useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PizzaContext } from "../context/ApiPizza";
import { useParams, useNavigate } from "react-router-dom";
import { formatoNumero } from "../assets/utils/formatoNumero";

function Pizza() {

    const { id } = useParams();
    const { pizzas, loading } = useContext(PizzaContext);
    const [pizzaDetail, setPizzaDetail] = useState(null);
    const navigate = useNavigate();

    const obtenerDatosPizza = () => {
        // Buscar la pizza por su id
        const selectedPizza = pizzas.find((pizza) => pizza.id === id);
        setPizzaDetail(selectedPizza || {});
    };

    useEffect(() => {
        obtenerDatosPizza();
    }, [pizzas]);


    const handleBackClick = () => {
        navigate('/');
    };


    if (loading) {
        return <div>Cargando...</div>;
    }

    if (!pizzas) {
        return <div>Cargando...</div>;
    }


    if (!pizzaDetail) {
        return <div className=" mt-2 text-bold fs-4" ><strong>Pizza no encontrada!!</strong></div>;
    }

    return (
        <>
            <div className="container mt-1">
                <div className="row align-items-center" style={{ height: '60vh' }}>
                    <div className="col-md-6">
                        <img src={pizzaDetail.img} className="img-fluid img-thumbnail rounded float-start" alt={pizzaDetail.name} />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="mb-5 card-title text-decoration-underline"><strong>{pizzaDetail.name}</strong></h5>
                            <h5 className="mb-4 card-title text-start fs-6"><strong>Ingredientes: {pizzaDetail.desc}</strong></h5>
                            <ul>
                                {pizzaDetail.ingredients.map((ingredient, index) => (
                                    <li key={index} className="card-title text-start fs-6">🍕 {ingredient}</li>
                                ))}
                            </ul>
                            <p className="mt-1 card-text text-center fs-4"><strong>Valor: ${formatoNumero(pizzaDetail.price)}</strong></p>
                            <Button className="mt-1" variant="success" type="button" onClick={handleBackClick}>
                                Volver a Inicio
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pizza;