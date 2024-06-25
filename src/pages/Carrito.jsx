import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrito() {

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <>
            <div>
                <h1>Carrito</h1>
            </div>

            <Button className="mt-1" variant="success" type="submit" onClick={handleBackClick}  >
                Volver a Inicio
            </Button>
        </>
    );
}

export default Carrito;