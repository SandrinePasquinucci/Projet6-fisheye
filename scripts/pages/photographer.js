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
function myfunctionTri(medias) {
  var selectElmt = document.getElementById("listeClass");
  var valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].value;
  var textselectionne = selectElmt.options[selectElmt.selectedIndex].text;

  console.log(selectElmt);
  console.log(valeurselectionnee);
  console.log(textselectionne);
  textselectionne = "titre";
  //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  if (textselectionne === "date") {
    medias.sort(function (a, b) {
      return a.date - b.date;
    });
  }
  if (textselectionne === "titre") {
    medias.sort(function (a, b) {
      return a.title.toLowerCase() - b.title.toLowerCase();
    });
  }
  if (textselectionne === "popularite") {
    medias.sort(function (a, b) {
      return a.likes - b.likes;
    });
  }
}
function tri(medias) {
  let triClass = document.createElement("div");
  let label = document.createElement("label");
  let select = document.createElement("select");
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let option3 = document.createElement("option");

  triClass.className = "triClass";

  label.forName = "label";
  label.textContent = "Trier par";
  select.id = "listeClass";
  //select.setAttribute("onchange", "myfunctionTri("`${medias}`")");
  //select.setAttribute("onchange", "myfunctionTri("+medias")");
  //select.setAttribute("onchange", "myfunctionTri"`(${medias})`);

  option1.value = "option1";
  option1.textContent = "Date";
  option1.setAttribute("selected", "");
  option2.value = "option2";
  option2.textContent = "Titre";
  option3.value = "option3";
  option3.textContent = "Popularité";
  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  triClass.appendChild(label);
  triClass.appendChild(select);
  return triClass;
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
  let triDOM = tri(medias);
  triSection.appendChild(triDOM);
  //ecoute des evenements sur le tri au chargement de la page
  //https://grafikart.fr/forum/18998
  window.onload = myfunctionTri(medias);

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
