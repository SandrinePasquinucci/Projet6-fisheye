
async function getPhotographers() {
//   let photographers = [];
  return fetch("./data/photographers.json")
  .then((reponse) => reponse.json())
  .then((data) => data.photographers);
};
// const requete = await fetch('./data/photographers.json');
// let data = await requete.json();
// const photographers = data.photographers;
// // console.log(photographers)     
// return   photographers
 
// };
//import { getPhotographers } from "../utils/api.js";


async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const  photographers  = await getPhotographers();
    console.log(photographers);
    displayData(photographers);
};

init();