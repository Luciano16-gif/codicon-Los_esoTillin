import Stars from "./stars.jsx"
import "../css/kepler90e.css"
import k90e from "../img/kepler90e.png";
import { Link } from "react-router-dom";

function Kepler90e (){
    return (
        
        <div >
            <Stars className="boy"/>
            <div className="kek">
                <p className="xlr8">
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
            <div className="description">
                <p className="xlr8">
                    <h1 className="xlr8">Kepler-90e</h1>
                    <br />
                    Este planeta es uno de los más parecidos a la Tierra en términos de tamaño 
                    y temperatura superficial. Sin embargo, su densidad es un poco mayor, lo 
                    que sugiere que podría ser un planeta rocoso.
                </p>
                <div id="regresar">
                    <Link to="/system">
                        <p>Regresar</p>
                    </Link>
                </div>
            </div>
            <div>
                <img className="freddy" id="kepler90e" src={k90e} alt="kepler90e"/>
            </div>
        </div>
    )

};

export default Kepler90e;