import Stars from "./stars.jsx"
import "../css/kepler90d.css"
import k90d from "../img/kepler90d.png";
import { Link } from "react-router-dom";

function Kepler90d (){
    return (
        
        <div >
            <Stars className="boy"/>
            <div className="kek">
                <p className="xlr8">
                    Seguramente ya te habrás dado cuenta pero estas cajas no represetan el planeta que contienen,
                    Y eso es porque esta página representa el proceso a un fin y en ese proceso de alcanzar nuestros objetivos, 
                    podemos encontrarnos con situaciones que nos sorprenden y que ponen a prueba nuestra capacidad de adaptación y 
                    creatividad. Podemos encontrarnos con obstáculos que no esperábamos o con oportunidades que nunca habíamos 
                    considerado antes.
                    <br />
                    <br />
                    En este sentido es como abrir una caja: no sabemos lo que hay dentro hasta que la abrimos. Podemos
                    pensar que sabemos lo que hay dentro, pero en realidad es una incertidumbre que solo se despeja cuando nos atrevemos 
                    a abrirla y enfrentar lo que hay dentro.</p>
            </div>
            <div className="description">
                <p className="xlr8">
                    <h1 className="xlr8">Kepler-90d</h1>
                    <br />
                    Este es el planeta más grande del sistema, con un tamaño similar a Neptuno. 
                    Es un planeta gaseoso con una densidad mucho menor que la de la Tierra.
                </p>
                <div id="regresar">
                    <Link to="/system">
                        <p>Regresar</p>
                    </Link>
                </div>
            </div>
            <div>
                <img className="freddy" id="kepler90d" src={k90d} alt="kepler90d"/>
            </div>
        </div>
    )

};

export default Kepler90d;