//Mettre le code JavaScript lié à la page photographer.html
//comment recuperer l'id collée dans l'url de la page
//https://www.sitepoint.com/get-url-parameters-with-javascript/

function getIDUrl() {
const queryString  = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photographerId = urlParams.get("id");
return photographerId;

   } 
 

   async function getPhotographers(idPhotographer) {

    return fetch("./data/photographers.json")
    .then((reponse) => reponse.json())
    .then((data) => data.photographers);
   
};

    
  //import { getPhotographers } from "../utils/api.js";
  
  
  
  async function displayData(photographers, idPhotographer) {
      const photographersSection = document.querySelector(".photograph-header");

      //photographers.forEach((photographer) => {
        for (let i = 0; i < photographers.length; i++) {
    

      if (photographers[i].id==idPhotographer) {
        const photographerModel = photographerFactory(photographers[i],"photo");
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
       
 
        //  const photographerModel = photographerFactoryID(photographers[i]);
        //     const userCardDOMID = photographerModel.getUserCardDOMID();
        //     photographersSection.appendChild(userCardDOMID);
       }


    };
  };
  
async function init() {
    // Récupère les datas des photographes
    const idPhotographer = await getIDUrl();
    const  photographers  = await getPhotographers(idPhotographer);
     displayData(photographers,idPhotographer);
};
  
  init();