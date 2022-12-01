import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array <string>} tiposCartas Ejemplo ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejemplo ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */


export const crearDeck =(tiposCartas, tiposEspeciales)=>{

    if(!tiposCartas || !tiposCartas.length >0) throw new Error('type of cards is required as an array of strings');
    if(!tiposEspeciales || !tiposEspeciales.length >0) throw new Error('special type is required as an array of strings');


    let deck =[];

    for(let i = 2 ; i <= 10; i++){
        for(let tipo of tiposCartas){
            deck.push(i + tipo)
        }
    }

    for(let tipo of tiposCartas){
        for(let esp of tiposEspeciales){
            deck.push(esp + tipo)
        }
    }

    deck = _.shuffle(deck);
    return deck;
    
}