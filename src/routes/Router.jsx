import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Pizza from "../pages/Pizza";
import Carrito from "../pages/Carrito";




function Router() {

    return (

        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="*" element={<NotFound />} />

        </Routes>

    );
}

export default Router;