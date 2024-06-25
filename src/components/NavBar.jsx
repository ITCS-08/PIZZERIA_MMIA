
import '../assets/styles/style.css';
// import { NavLink } from "react-router-dom";
import { formatoNumero } from "../assets/utils/formatoNumero";
import { PizzaContext } from "../context/ApiPizza";
import { useContext } from "react";



function NavBar() {

    // const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    const { totalPrecio } = useContext(PizzaContext);

    return (
        <>
            <header>

                <nav >

                    {/* <NavLink className={setActiveClass} to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '1.3rem' }}>
                        🍕 Pizzería Mamma Mía!                           
                    </NavLink>  */}

                    <div className="container mt-6">
                        <div className="row">
                            <div className="col-8 d-flex align-items-center">
                                <strong className="fs-5">🍕 Pizzería Mamma Mía!</strong>
                            </div>
                            <div className="col-6 d-flex justify-content-end align-items-center">
                                <strong className="fs-5">🛒 Total Precio: {formatoNumero(totalPrecio)}</strong>
                            </div>
                        </div>
                    </div>

                    {/* <span style={{ margin: '0 5px' }}>-</span>
                        <NavLink className={setActiveClass} to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '1.3rem' }}>
                            <h4 className="d-flex justify-content-end"><strong>🛒Total Precio: ${formatoNumero(totalPrecio)}</strong></h4>
                        </NavLink> */}


                    {/* <span style={{ margin: '0 5px' }}>-</span>
                    <NavLink className={setActiveClass} to="/pizza" style={{ textDecoration: 'none', color: 'white', fontSize: '1.3rem' }}>
                    Pizzas
                    </NavLink>  */}

                </nav>


            </header>

        </>

    );
}


export default NavBar;