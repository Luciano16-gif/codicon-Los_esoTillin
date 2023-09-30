import Stars from "./stars.jsx"
import "../css/kepler90g.css"
import keplar90g from "../img/kepler90g.png";


function Kepler90g (){
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
                    <h1 class="xlr8">Kepler-90g</h1>
                    <br />
                    Es uno de los planetas más interesantes del sistema. Es un poco más 
                    grande que la Tierra y tiene una temperatura superficial de alrededor 
                    de 335°C. Tiene una densidad similar a la de la Tierra, lo que sugiere 
                    que podría ser un planeta rocoso. Además, está en la zona habitable de 
                    la estrella, lo que significa que podría tener agua líquida en su 
                    superficie.
                </p>
            </div>
            <div>
                <img class="freddy" id="kepler90g" src={keplar90g} alt="kepler90g"/>
            </div>
        </div>
    )

};

export default Kepler90g;