async function getPhotographers() {
  return fetch("./data/photographers.json")
    .then((reponse) => reponse.json())
    .then((data) => data.photographers);
}

//import { getPhotographers } from "../utils/api.js";

async function displayData(photographers) {
  let photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    let photographerModel = photographerFactory(photographer, "index");
    let userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
