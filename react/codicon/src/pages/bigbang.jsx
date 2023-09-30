import "../css/bigbang.css";
import cerrada from "../img/cerrada.png";
import abierta from "../img/abierta.png"
import music from "../music/bigbang.mp3"
import "../css/content.css";
import Stars from  "./stars";
import { Link } from "react-router-dom";
import nebulosa from "../img/nebulosa.jpg"
import cometa from  "../img/cometa.png"

function Bigbang() {

    //función para colocar la música, no sé pq suena con retraso
    function startMusic(){
        const audio1 = new Audio(music);
        audio1.play();
    }
    //funcion para cambiar la caja a abierta
    function cambiarImagen() {
        const cerrada = document.getElementById("cerrada");
        const bang = document.getElementById("bang");
        const content = document.getElementById("content");
        const next = document.getElementById("next");
        cerrada.onload = () => {
        startMusic(); //agregar que suene la musica en la propio función de cambiar imagen
        bang.classList.add("coming");
        setTimeout(() => {bang.classList.add("fade-out")}, 2000); // agregar la clase "fade-out"
        setTimeout(() => {
        bang.style.display = "none"; // establecer display en "none"
          }, 4000);
        setTimeout(() => {content.classList.add("fade-in")}, 3500); //hacer que aparezca el content
        };
        setTimeout(() => {next.classList.add("fade-in")}, 10000);
        cerrada.src = abierta;
      }
    
      //hacer que aparezcan los testos
    function apple() {
        const lex = document.getElementById("nebultext");
        const lox = document.getElementById("pruv");
            lex.classList.add("block");
            lox.classList.add("closx")
    }

    function apple2() {
        const lex2 = document.getElementById("cometext");
        const lox2 = document.getElementById("pruv2");
            lex2.classList.add("block");
            lox2.classList.add("closx")
    }
        return(
        <div>
            <div id="bang" >
                <img id="cerrada" src={cerrada} alt="" onClick={cambiarImagen} />
            </div>
            <div id="content">

                <div id="bg">
                    <Stars id="stars"/>
                </div>

                <div id="text">     
                    <p class="transparent"><h1 class="transparent">Caja Universal</h1>
                    <br />
                    Cada vez que nos proponemos un objetivo, nos embarcamos en una aventura llena de incertidumbres 
                    y sorpresas. Como abrir una caja, el camino hacia nuestros objetivos es un proceso en el que no sabemos con certeza qué 
                    encontraremos.
                    <br />
                    Al empezar un objetivo, es como si estuviéramos frente a una caja cerrada, sin saber qué hay dentro. Podemos tener una 
                    idea general de lo que queremos lograr, pero desconocemos los detalles y los obstáculos que encontraremos en el camino. 
                    Por ello, el proceso de alcanzar un objetivo es un viaje lleno de misterios y desafíos.</p>
                </div>

                <Link to="/system" id="nexts">
                    <div class="transparent">
                        <p class="transparent" id="trulu">Siguiente</p> <img src={cerrada} id="omegalil" alt="" />
                    </div>
                </Link>

                <div class="transparent">
                    <p id="nebultext" class="transparent">Esta es la Nebulosa de Orion
                    <br />
                    La Nebulosa de Orión es una nebulosa brillante en el cielo nocturno, también conocida 
                    como Messier 42 o NGC 1976. Se encuentra en la constelación de Orión, a unos 1.344 años luz de distancia 
                    de la Tierra. Es una nebulosa de emisión que emite luz en lugar de reflejarla. Se cree que esta luz es 
                    producida por una gran cantidad de estrellas jóvenes y calientes que se están formando en la nebulosa. 
                    Además, la nebulosa contiene una gran cantidad de gas y polvo cósmico que también contribuyen a la emisión 
                    de luz.</p>
                    <div id="pruv" onClick={apple}/>
                </div>

                <div class="polvo">
                    <div>
                        <img id="nebulosa" src={nebulosa} alt="" />
                    </div>
                </div>

                <div id="shadow">
                    <img id="cometa" src={cometa} alt="" />
                </div>
                <div id="lel"/>
                <div>
                    <p id="cometext">Esto es un cometa
                    <br />
                    Los cometas son restos que provienen de los comienzos del Sistema Solar, hace unos 4.600 millones de años. 
                    Consisten en estructuras de hielo cubiertas con material orgánico. Es posible que puedan brindar datos 
                    relevantes acerca de la formación del Sistema Solar.
                    
                    Algunas teorías suponen que los cometas trajeron agua y otros compuestos orgánicos que sonindispensables 
                    para la vida a la Tierra cuando aún no era un planeta, sino que estaba en su etapa inicial de formación.
                    </p>
                    <div id="pruv2" onClick={apple2}/>
                </div>
            </div>
        </div>
    )
};

export default Bigbang;
