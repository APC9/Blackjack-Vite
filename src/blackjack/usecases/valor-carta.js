
/**
 * 
 * @param {Array<string>} carta Se espera un arreglo de String[] 
 * @returns retorna el valor de carta 
 */


export let valorCarta= (carta)=>{

    if(!carta || !carta.length >0) throw new Error('The array of letters is required as a string');

    let valor = carta.substring(0 , carta.length -1);
    return (isNaN(valor)) ?
            (valor === 'A')? 11:10 
            : parseInt(valor);
}
