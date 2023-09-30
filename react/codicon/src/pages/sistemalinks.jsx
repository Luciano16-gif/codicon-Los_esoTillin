import "../css/sistemalinks.css"
import {Link} from "react-router-dom"
import Stars from "./stars.jsx"
import cerrada from "../img/cerrada.png"

function SSSistema (){

    return(
        
        <div> 
        <div class="planetas">
            <Stars/>
                <div class="sun"></div>
                <div class="shadowsun"></div>

            <div class="neptuno-linea-1">
                 <Link to="/kepler90b" class="Link">
                     <div class="neptuno">
                    </div>
                 </Link>
            </div>


            <div class="urano-linea-1">
                <Link to="/kepler90c" class="Link">
                    <div class="urano">
                    </div>
                </Link>
            </div>

            <div class="saturno-linea-1">
                <Link to="/kepler90d" class="Link">
                    <div class="saturno">
                     </div>
                </Link>
            </div>

            <div class="jupiter-linea-1">
                <Link to="/kepler90e" class="Link">
                    <div class="jupiter">
                    </div>
                </Link>
            </div>
            
            <div class="marte-linea-1">
                <Link to="/kepler90f" class="Link">
                    <div class="marte">
                    </div>
                </Link>
            </div>

            <div class="tierra-linea-1">
                <Link to="/kepler90b" class="Link">
                    <div class="tierra">
                    </div>
                </Link>
            </div>

            <div class="venus-linea-1">
                <Link to="/kepler90h" class="Link">
                    <div class="venus">
                    </div>
                </Link>
            </div>
            
            <div class="mercurio-linea">
                <Link to="/kepler90i" class="Link">
                    <div class="mercurio">
                    </div>
                </Link>
            </div>
        </div>
        <Link to="/black" id="nexts">
                <div class="transparent">
                     <p class="transparent">Siguiente</p> <img src={cerrada} id="omegalils" alt="" />
                </div>
            </Link>
        </div>  
    )

};

export default SSSistema;