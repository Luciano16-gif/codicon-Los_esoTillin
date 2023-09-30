import Stars from "./stars.jsx";
import "../css/kepler90c.css";
import kepler90c from "../img/kepler90c.png";
import { Link } from "react-router-dom";

function Kepler90c (){
    return (
        
        <div >
            <Stars class="boy"/>
            <div class="kek">
                <p class="xlr8">
                    El sistema Kepler-90 tiene un total de 8 planetas confirmados en órbita alrededor 
                    de su estrella, Kepler-90, que es similar al Sol en tamaño y temperatura.
                    <br />
                    <br />
                    el sistema Kepler-90 tiene un número relativamente alto de 
                    planetas en órbita alrededor de su estrella, lo que sugiere que los sistemas 
                    solares con muchos planetas pueden ser más comunes de lo que se pensaba 
                    anteriormente. Además, los planetas en el sistema están muy cerca entre 
                    sí, lo que indica que los sistemas planetarios pueden ser más compactos 
                    de lo que se pensaba.</p>
            </div>
            <div class="description">
                <p class="xlr8">
                    <h1 class="xlr8">Keplar-90c</h1>
                    <br />
                    Es el segundo planeta del sistema y orbita a una distancia de 0,014 UA. Tiene 
                    un tamaño similar al de la Tierra y completa una órbita alrededor de Kepler-90 
                    en 7,3 días.
                </p>
                <div id="regresar">
                    <Link to="/system">
                        <p>Regresar</p>
                    </Link>
                </div>
            </div>
            <div>
                <img class="freddy" id="keplar90c" src={kepler90c} alt="keplar90c"/>
            </div>
        </div>
    )

};

export default Kepler90c;