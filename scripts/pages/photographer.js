//Mettre le code JavaScript lié à la page photographer.html
//comment recuperer l'id collée dans l'url de la page
//https://www.sitepoint.com/get-url-parameters-with-javascript/

function getIDUrl() {
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let photographerId = urlParams.get("id");
  return photographerId;
}

async function getPhotographers() {
  return fetch("./data/photographers.json")
    .then((reponse) => reponse.json())
    .then((data) => data.photographers);
}
// //import { getPhotographers } from "../utils/api.js";
async function getMedias() {
  return fetch("./data/photographers.json")
    .then((reponse) => reponse.json())
    .then((data) => data.media);
}

function tri() {
  let triClass = document.createElement("div");
  let label = document.createElement("label");
  let select = document.createElement("select");
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let option3 = document.createElement("option");

  triClass.className = "triClass";

  label.forName = "label";
  label.textContent = "Trier par";
  select.id = "option";
  option1.value = "option";
  option1.textContent = "Date";
  option2.value = "option";
  option2.textContent = "Titre";
  option3.value = "option";
  option3.textContent = "Popularité";
  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  triClass.appendChild(label);
  triClass.appendChild(select);
  return triClass;
}

function trierMedias(medias) {
  //let value = document.querySelector(".photograph-tri");
  const value = "titre";
  console.log(value);
  if (value === "date") {
    medias.sort(function (a, b) {
      return a.date - b.date;
    });
  }
  if (value === "titre") {
    medias.sort(function (a, b) {
      return a.title - b.title;
    });
  }
  if (value === "popularite") {
    medias.sort(function (a, b) {
      return a.likes - b.likes;
    });
  }
}

async function displayData(photographers, medias, idPhotographer, dossier) {
  let photographersSection = document.querySelector(".photograph-header");
  //let main = document.getElementById(".main");
  // let triSection = document.createElement("div");
  // triSection.className = "photograph-tri";
  // let mediasSection = document.createElement("div");
  // mediasSection.className = "photograph-main";
  // main.appendChild(mediasSection);
  // main.appendChild(triSection);

  let mediasSection = document.querySelector(".photograph-main");
  let triSection = document.querySelector(".photograph-tri");
  //rajout dans le dom du tri par date titre popularite
  let triDOM = tri();
  triSection.appendChild(triDOM);
  //ecoute des evenements sur le tri
  let choixoption = document.querySelector(".photograph-tri");
  choixoption.addEventListener("click", trierMedias(medias));

  for (let i = 0; i < photographers.length; i++) {
    if (photographers[i].id == idPhotographer) {
      let photographerModel = photographerFactory(photographers[i], "photo");
      let userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
      dossier = photographers[i].name;
    }
  }

  for (let i = 0; i < medias.length; i++) {
    if (medias[i].photographerId == idPhotographer) {
      let mediaModel = mediaFactory(medias[i], dossier);
      let userMediaDOM = mediaModel.getUserMediaDOM();
      mediasSection.appendChild(userMediaDOM);
    }
  }
}

async function init() {
  let idPhotographer = await getIDUrl();
  let photographers = await getPhotographers();
  let medias = await getMedias();
  displayData(photographers, medias, idPhotographer);
}

init();
