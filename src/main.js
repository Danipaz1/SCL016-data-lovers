import { obtenerCampeones } from './data.js';
import lol from './data/lol/lol.js';

// Dar funcionalidad a los botones de categoria de campeones
//   Usar eventListener para agregar click y llamar a la funcion obtener campeones

const onClickHandlerAssassin = () => {
    obtenerCampeones(lol.data,'Assassin');

    // redirección a página 2, mostrar grupo de campeones
}
    const asesinos = document.getElementById('asesinos');
    asesinos.addEventListener('click', onClickHandlerAssassin, false);





// TODO: Buscar campeones por tipo
// Impotar data.js en main.js y pasarla al eventListener



// Mostrar categoria de campeones seleccionada

