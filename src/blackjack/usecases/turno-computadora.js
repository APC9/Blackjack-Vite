import { divCartascomputadora, mensajeAnimacionDerrota, mensajeAnimacionEmpate, mensajeAnimacionVictoria, smallsJugador } from '..';
import { pedirCarta, valorCarta, CrearCartaHtml } from '.';




/* Turno de la Computadora */

/**
 * 
 * @param {number} puntosMinimos puntos minimos que la computadora necesita para ganar 
 */

export const turnoComputadora =(puntosMinimos)=>{

    if(!puntosMinimos) throw new Error('minimum points are necessary');
    let puntosComputadora =0;
    do{
        let carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        smallsJugador[1].innerHTML = puntosComputadora;
        
        CrearCartaHtml(divCartascomputadora, carta);

        if(puntosMinimos > 21){ 
            break; 
        }

    }while((puntosComputadora < puntosMinimos) && (puntosMinimos <=21));

    setTimeout(()=>{

        if(puntosComputadora === puntosMinimos){
            mensajeAnimacionEmpate('Empate... Nadie gana')
        }else if(puntosMinimos > 21){
            mensajeAnimacionDerrota('La computadora Gana')
        }else if(puntosComputadora > 21){
            mensajeAnimacionVictoria('Felicidades... Has Ganado')
        }else if(puntosMinimos > puntosComputadora){
            mensajeAnimacionVictoria('Felicidades... Has Ganado')
        }else if(puntosMinimos < puntosComputadora){
            mensajeAnimacionDerrota('La computadora Gana')
        }
    },10)

    
}