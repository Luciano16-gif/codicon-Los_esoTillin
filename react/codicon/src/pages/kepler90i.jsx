import Stars from "./stars.jsx"
import "../css/kepler90i.css"
import k90i from "../img/kepler90i.png";
import { Link } from "react-router-dom";

function Kepler90i (){
    return (
        
        <div >
            <Stars class="boy"/>
            <div class="kek">
                <p class="xlr8">
                    El sistema Kepler-90 tiene un total de 8 planetas confirmados en órbita 
                    alrededor de su estrella, Kepler-90, que es similar al Sol en tamaño 
                    y temperatura.
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
                    <h1 class="xlr8">Kepler-90i</h1>
                    <br />
                    Es el planeta más alejado de la estrella y tiene una órbita muy lejana, 
                    lo que significa que es un planeta frío con una temperatura superficial 
                    de alrededor de -150°C. Es un poco más grande que la Tierra y tiene una 
                    densidad similar, lo que sugiere que podría ser un planeta rocoso.
                </p>
                <div id="regresar">
                <Link to="/system">
                    <p>Regresar</p>
                </Link>
                </div>
            </div>
            <div>
                <img class="freddy" id="kepler90i" src={k90i} alt="kepler90i"/>
            </div>
        </div>
        
    )

};

export default Kepler90i;