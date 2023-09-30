import Stars from "./stars.jsx"
import "../css/kepler90h.css"
import k90h from "../img/kepler90h.png";
import { Link } from "react-router-dom";

function Kepler90h (){
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
                    <h1 class="xlr8">Kepler-90h</h1>
                    <br />
                    Es un planeta bastante grande, con un tamaño similar al de Saturno. 
                    Es un planeta gaseoso con una densidad mucho menor que la de la Tierra.
                </p>
                <div id="regresar">
                    <Link to="/system">
                        <p>Regresar</p>
                    </Link>
                </div>
            </div>
            <div>
                <img class="freddy" id="kepler90h" src={k90h} alt="kepler90h"/>
            </div>
        </div>
    )

};

export default Kepler90h;