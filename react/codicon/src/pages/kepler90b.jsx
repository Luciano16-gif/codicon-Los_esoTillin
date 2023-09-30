import Stars from "./stars.jsx"
import "../css/kepler90b.css"
import k90b from "../img/kepler90b.png";
import { Link } from "react-router-dom";

function Kepler90b (){
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
                    <h1 class="xlr8">Kepler-90b</h1>
                    <br />
                    Es el planeta más cercano a su estrella y tiene una órbita muy cercana, lo 
                    que significa que es un planeta caliente con una temperatura superficial 
                    de alrededor de 800°C. Es similar en tamaño a la Tierra, pero su densidad 
                    es mucho menor, lo que sugiere que no es un planeta rocoso.
                </p>
                <div id="regresar">
                    <Link to="/system">
                        <p>Regresar</p>
                    </Link>
                </div>
            </div>
            <div>
                <img class="freddy" id="kepler90b" src={k90b} alt="kepler90b"/>
            </div>
        </div>
    )

};

export default Kepler90b;