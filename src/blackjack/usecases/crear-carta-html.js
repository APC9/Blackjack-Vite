
export const CrearCartaHtml = (div, carta)=>{
    const imgCartas = document.createElement('img');
        imgCartas.src=`./assets/cartas/${carta}.png`;
        div.append(imgCartas);
}