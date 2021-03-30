import { obtenerCampeones } from './data.js';
import lol from './data/lol/lol.js';


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
//Se oculta y se muestra lo que se quiere ver en la página 2
const transicion1 = () => {
    document.getElementById("championsCategory").style.display = "none";
    document.getElementById("championList").style.display = "flex";
    document.getElementById("btnTiposDeCampeones").style.display = "flex";
    document.body.className = 'rivenBackground';
    document.getElementById("sort").style.display = "flex";
    document.getElementById("introduccion").style.display = "none";
    document.getElementById("firstTitle").style.display = "none";
    document.getElementById("returnSelection").style.display = "none";
    document.getElementById("champBackground").style.display = "none";
    document.getElementById("returnButton").style = "";
    

};
//Se muestra y se oculta lo que se quiere ver en la página 3
const transicion2 = () => {
    document.getElementById("championsCategory").style.display = "none";
    document.getElementById("championList").style.display = "none";
    document.getElementById("initialTitle").style.display = "none";
    document.body.className = "backgroundWithOpacity";
    document.getElementById("sort").style.display = "none";
    document.getElementById("btnTiposDeCampeones").style.display = "none";
    document.getElementById("champInformation").className = "containerChampInformation"
    document.getElementById("champStory").className = "containerChampStory"
    document.getElementById("firstTitle").style.display = "none";
    document.getElementById("returnSelection").style.display = "block";
    document.getElementById("champBackground").className = "champBackground";
    document.getElementById("champInformation").style = "";
};
// Mostrar categoria de campeones seleccionada


const createInput = (champFilter) => {
    //Creando segunda pantalla de campeones según categoría
    // Creando etiqueta input
    for (let i = 0; i < champFilter.length; i++) {
        const section = document.createElement("SECTION");
        section.setAttribute("class", "inputAndLabel");

        const item = document.createElement("INPUT");
        item.setAttribute("type", "image");
        item.setAttribute("id", champFilter[i].name);
        item.setAttribute("src", champFilter[i].img);
        item.setAttribute("class", 'inputChamp');

        item.addEventListener('mouseover', () => {
            showLabel("champ" + i);
        });
        item.addEventListener('mouseout', () => {
            hideLabel("champ" + i);
        });
        //Todo esto corresponde a la página número 3
        item.addEventListener('click', () => {
            transicion2();
            document.body.style = "background-image:linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ), url('" + champFilter[i].splash + "')";
            document.getElementById("champIntro").innerHTML = champFilter[i].title;
            document.getElementById("champName").innerHTML = champFilter[i].name;
            document.getElementById("champBackground").style = "background-image:linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ), url('" + champFilter[i].splash + "')";
            document.getElementById("story").innerHTML = champFilter[i].blurb;
            document.getElementById("attack").innerHTML = ( "Attack " + champFilter[i].info.attack);
            document.getElementById("defense").innerHTML = ("Defense " + champFilter[i].info.defense);
            document.getElementById("magic").innerHTML = ("Magic " + champFilter[i].info.magic);
            document.getElementById("difficulty").innerHTML = ("Difficulty " + champFilter[i].info.difficulty);
           
        });

// Se crea label para ir mostrando los nombres de los campeones llamados
        const label = document.createElement("LABEL");
        label.setAttribute("for", champFilter[i].name);
        label.setAttribute("id", 'champ' + i);
        label.setAttribute("class", 'hideLabel');
        label.innerHTML = champFilter[i].name;

        section.appendChild(item);
        section.appendChild(label);
        document.getElementById("championList").appendChild(section);
    }
};

const showLabel = (id) => {
    document.getElementById(id).className = "tooltiptext showLabel";
};

const hideLabel = (id) => { 
    document.getElementById(id).className = "hideLabel";
};
//Boton return tipos de campeones
const returnPageOne = () => { 
    document.getElementById("championsCategory").style.display = "flex";
    document.getElementById("introduccion").style.display = "flex";
    document.getElementById("championList").style.display = "none";
    document.getElementById("firstTitle").style.display = "flex";
    document.getElementById("sort").style.display = "none";
    document.getElementById("returnButton").style.display = "none";
    document.body.className = 'kindredBackground';
    
    let championList  = document.getElementById("championList");
    while (championList.firstChild) {
        championList.removeChild(championList.firstChild);
    }

}
const button1 = document.getElementById('returnButton');
button1.addEventListener('click', returnPageOne, false);

//Boton seleccion de campeones

const returnPagetwo = () => { 
    document.getElementById("championList").style.display = "flex";
    document.getElementById("champInformation").style.display = "none";
    document.getElementById("sort").style.display = "flex";
    document.getElementById("btnTiposDeCampeones").style.display = "flex";
    document.getElementById("initialTitle").style.display = "flex";
    document.body.className = 'rivenBackground';
    document.body.style = '';

}
const button2 = document.getElementById('returnSelection');
button2.addEventListener('click', returnPagetwo, false);
