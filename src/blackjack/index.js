import _ from 'underscore';
import { CrearCartaHtml, crearDeck, pedirCarta, turnoComputadora, valorCarta} from './usecases';


export let deck = [];
const   tipos =['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador= 0;


export let btn_pedirCarta = document.querySelector('#btnPedir'),
        btn_detener = document.querySelector('#btnDetener'),
        btn_nuevo = document.querySelector('#btnNuevo'),
        smallsJugador = document.querySelectorAll('small'),
        divCartasJugador = document.querySelector('#jugador-cartas'),
        divCartascomputadora = document.querySelector('#computadoras-cartas');    

const   divAnimacion = document.querySelector('.modal'),
        animacioH1= document.querySelector('.modal h1'),
        animacionImg = document.querySelector('.modal img');


deck = crearDeck (tipos, especiales);



btn_pedirCarta.addEventListener('click',()=>{
    
    let carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    smallsJugador[0].innerHTML = puntosJugador;
    
    CrearCartaHtml(divCartasJugador, carta);

    if(puntosJugador >21){
        mensajeAnimacionDerrota('Has perdido')
        btn_pedirCarta.style.display ='none'; 
        turnoComputadora(puntosJugador); 
        btn_detener.style.display ='none'; 
    }else if(puntosJugador === 21){
        mensajeAnimacionVictoria('Felicidades... Has Ganado')
        btn_detener.style.display ='none';
        btn_pedirCarta.style.display ='none';
        turnoComputadora(puntosJugador); 
    }

}); 

btn_detener.addEventListener('click',()=>{
    btn_pedirCarta.style.display ='none'; 
    btn_detener.style.display ='none';

    turnoComputadora(puntosJugador);
})

btn_nuevo.addEventListener('click', ()=>{
    location.reload();
})

const animacion =(num, mensaje)=>{
    divAnimacion.classList.add('animacion');
    animacionImg.src = `./assets/cartas/pngegg${num}.png`;
    animacioH1.innerHTML = mensaje;
}

export const mensajeAnimacionVictoria=(mensaje)=>{
    animacion(2, mensaje);
}

export const mensajeAnimacionDerrota=(mensaje)=>{
    animacion(1, mensaje);
}
export const mensajeAnimacionEmpate=(mensaje)=>{
    animacion(3, mensaje);
}

