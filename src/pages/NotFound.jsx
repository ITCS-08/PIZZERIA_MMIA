import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NotFound() {

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
    };

    return (

        <>
            <div>

                <div className="d-flex justify-content-center mt-3">
                    <h1>La Pagina No fue encontrada. Debe volver a Home</h1>
                </div>

            </div>

            <Button className="mt-1" variant="success" type="submit" onClick={handleBackClick}  >
                Volver a Inicio
            </Button>


        </>

    );
}

export default NotFound;