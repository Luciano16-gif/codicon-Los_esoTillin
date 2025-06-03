import "../css/sistemalinks.css"
import {Link} from "react-router-dom"
import Stars from "./stars.jsx"
import cerrada from "../img/cerrada.png"

function SSSistema (){

    return(
        
        <div> 
        <div className="planetas">
            <Stars/>
                <div className="sun"></div>
                <div className="shadowsun"></div>

            <div className="neptuno-linea-1">
                 <Link to="/kepler90b" className="Link">
                     <div className="neptuno">
                    </div>
                 </Link>
            </div>


            <div className="urano-linea-1">
                <Link to="/kepler90c" className="Link">
                    <div className="urano">
                    </div>
                </Link>
            </div>

            <div className="saturno-linea-1">
                <Link to="/kepler90d" className="Link">
                    <div className="saturno">
                     </div>
                </Link>
            </div>

            <div className="jupiter-linea-1">
                <Link to="/kepler90e" className="Link">
                    <div className="jupiter">
                    </div>
                </Link>
            </div>
            
            <div className="marte-linea-1">
                <Link to="/kepler90f" className="Link">
                    <div className="marte">
                    </div>
                </Link>
            </div>

            <div className="tierra-linea-1">
                <Link to="/kepler90b" className="Link">
                    <div className="tierra">
                    </div>
                </Link>
            </div>

            <div className="venus-linea-1">
                <Link to="/kepler90h" className="Link">
                    <div className="venus">
                    </div>
                </Link>
            </div>
            
            <div className="mercurio-linea">
                <Link to="/kepler90i" className="Link">
                    <div className="mercurio">
                    </div>
                </Link>
            </div>
        </div>
        <Link to="/black" id="nexts">
                <div className="transparent">
                     <p className="transparent">Siguiente</p> <img src={cerrada} id="omegalils" alt="" />
                </div>
            </Link>
        </div>  
    )

};

export default SSSistema;