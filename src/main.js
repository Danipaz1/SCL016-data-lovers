import { obtenerCampeones } from './data.js';
import lol from './data/lol/lol.js';

// Dar funcionalidad a los botones de categoria de campeones
//   Usar eventListener para agregar click y llamar a la funcion obtener campeones


//Primer botón Assassin---------------------------------------------------------------------

const onClickHandlerAssassin = () => {
    let champFilter = obtenerCampeones(lol.data,'Assassin');

    transicion1();

    //Creando segunda pantalla de campeones según categoría
    // Creando etiqueta input
    createInput(champFilter);

    // mostrar grupo de campeones
   
}
const asesinos = document.getElementById('asesinos');
asesinos.addEventListener('click', onClickHandlerAssassin, false);

//Segundo botón Fighter ---------------------------------------------------------------------

const onClickHandlerFighter = () => {
    let champFilter = obtenerCampeones(lol.data,'Fighter');

    transicion1();

    createInput(champFilter);

    // mostrar grupo de campeones
   
}
const luchadores = document.getElementById('luchadores');
luchadores.addEventListener('click', onClickHandlerFighter, false);

// Tercer botón Mage --------------------------------------------------------------------

const onClickHandlerMage = () => {
    let champFilter = obtenerCampeones(lol.data,'Mage');

    transicion1();

    //Creando segunda pantalla de campeones según categoría
    // Creando etiqueta input
    createInput(champFilter);

    // mostrar grupo de campeones
   
}
const magos = document.getElementById('magos');
magos.addEventListener('click', onClickHandlerMage, false);

// Cuarto botón Marksman--------------------------------------------------------------------

const onClickHandlerMarksman = () => {
    let champFilter = obtenerCampeones(lol.data,'Marksman');

    transicion1();

    //Creando segunda pantalla de campeones según categoría
    // Creando etiqueta input
    createInput(champFilter);

    // mostrar grupo de campeones
   
}
const tiradores = document.getElementById('tiradores');
tiradores.addEventListener('click', onClickHandlerMarksman, false);

// Quinto botón Support--------------------------------------------------------------------

const onClickHandlerSupport = () => {
    let champFilter = obtenerCampeones(lol.data,'Support');

    transicion1();

    //Creando segunda pantalla de campeones según categoría
    // Creando etiqueta input
    createInput(champFilter);

    // mostrar grupo de campeones
   
}
const soportes = document.getElementById('soportes');
soportes.addEventListener('click', onClickHandlerSupport, false);

// Sexto botón Tank --------------------------------------------------------------------

const onClickHandlerTank = () => {
    let champFilter = obtenerCampeones(lol.data,'Tank');

    transicion1();

    //Creando segunda pantalla de campeones según categoría
    // Creando etiqueta input
    createInput(champFilter);

    // mostrar grupo de campeones
   
}
const tanques = document.getElementById('tanques');
tanques.addEventListener('click', onClickHandlerTank, false);


//Funciones de ayuda
const transicion1 = () => {
    document.getElementById("championsCategory").style.display = "none";
    document.getElementById("championList").style.display = "block";
};


// TODO: Buscar campeones por tipo
// Impotar data.js en main.js y pasarla al eventListener



// Mostrar categoria de campeones seleccionada


const createInput = (champFilter) => {
    //Creando segunda pantalla de campeones según categoría
    // Creando etiqueta input
    for (let i = 0; i < champFilter.length; i++) {
        const item = document.createElement("INPUT");
        item.setAttribute("type", "image");
        item.setAttribute("id", "champ" + i);
        item.setAttribute("src", champFilter[i].img);
        document.getElementById("championList").appendChild(item);  
    }
};
