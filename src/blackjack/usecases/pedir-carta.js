import { deck } from "..";


/**
 * Esta funcion Eliminina la ultima carta del deck
 * @returns{Array <String>} retonar un nuevo arreglo de carta
 */

export const pedirCarta = ()=>{   
    let carta = deck.pop();
    
    return carta;
}