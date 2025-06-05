import "../css/blackhole.css"
import "../css/blackger.css"
import { useEffect } from "react";
import cerrada from "../img/cerrada.png";
import Stars from "./stars";

function Blackhole () {
    const addSparks = () => {
        const portal = document.getElementById("portal");
        for (let i = 0; i < 360; i++) {
            const chispa = document.createElement("div");
            chispa.className = "chispa";
            chispa.style.rotate = i * 2 + "deg";
            let chispaTranslation = Math.random() * (120 - 100) + 100;
            chispa.style.transform = "translate(" + chispaTranslation + "px)";
            portal.appendChild(chispa);
        }
    };

    useEffect(() => {
        addSparks();
    }, []);

    function appereance(){
        const locx = document.querySelector(".agh");
        const obo = document.querySelector(".odo");
        locx.classList.add("fade-outs");
        obo.style.display = "block";
        const planetario = document.querySelector(".arte");
        setTimeout(() => {
            planetario.classList.add("fade-outs");
        }, 8000);
      }
    return (
        <div>
            <div id="ody">
                <div>
                    <div className="odo">
                        <div className="lanetas">
                        
                        <div className="agh">
                            <Stars></Stars>
                            <div className="loco" onClick={appereance}>
                                <img id="mecorro" src={cerrada} alt="" />
                            </div>
                        </div>

                            <div className="ercurio-linea">
                                <div className="ercurio"></div>
                            </div>

                            <div className="enus-linea-1">
                                <div className="enus"></div>
                            </div>

                            <div className="ierra-linea-1">
                                <div className="ierra"></div>
                            </div>

                            <div className="arte-linea-1">
                                <div className="arte"></div>
                            </div>

                            <div className="upiter-linea-1">
                                <div className="upiter"></div>
                            </div>

                            <div className="aturno-linea-1">
                                <div className="aturno"></div>
                            </div>

                            <div className="rano-linea-1">
                                <div className="rano"></div>
                            </div>

                            <div className="eptuno-linea-1">
                                <div className="eptuno"></div>
                            </div>

                            <div id="position">
                            <div id="portal"></div>

                            <div>
                            </div>
                            </div>
                            <p id="keke">
                                En la vida se nos presentan diferentes oportunidades que luego de una breve reflexion logramos 
                                determinar que son similares a una caja debido a que de forma similar a las oportunidades no sabemos el 
                                contenido de estas.

                                Entonces cuando aceptamos las oportunidades es similar a abrir una caja estamos expectantes por conoce 
                                que hay en su interior que de una otra forma nos sorprendera aunque de primera mano parezca que no.
                                Como queda mencionado en la pelicula forest gump "La vida es como una caja de chocolates, nunca sabras 
                                que te tocara"

                                Mi equipo yo decidimos abrir la caja que se nos presento llamada codicon y simplemente quedamos perplejos 
                                por que asi como logramos desarrollar cosas increibles en el poco tiempo tambien se nos presentaron 
                                diferentes obstaculos que nos dificultaron y por ende nos sorprendio.

                                Finalmente logramos terminar y hacer que este proyecto fuera una caja que sorprendiese a aquel que 
                                decidiese atreverse a abrirla.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Nose addSparks={addSparks} />
        </div>
    );
}
  
function Nose({ addSparks }) {
    useEffect(() => {
        addSparks();
    }, []);
  
    return null;
}
  
export default Blackhole;