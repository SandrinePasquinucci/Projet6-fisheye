let mediaTrie = [];

//comment recuperer l'id collée dans l'url de la page
//https://www.sitepoint.com/get-url-parameters-with-javascript/
async function getIDUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const photographerId = urlParams.get("id");
  return photographerId;
}

//comment recuperer le tableau du fichier json dans dossier data
async function getData() {
  return fetch("./data/photographers.json")
    .then((reponse) => reponse.json())
    .then((data) => data);
}

//comment recuperer les elements d'un seul photographe
//find possible que pour retourner un seul element
function getPhotographerById(data, idPhotographer) {
  return data.find((photographer) => +photographer.id === +idPhotographer);
}

//comment recuperer les medias d'un seul photographe
//filter possible pour retourner plusieurs elements
function getMediasById(data, idPhotographer) {
  return data.filter(
    (photographer) => +photographer.photographerId === +idPhotographer
  );
}
function Tri(photographer) {
  //comment trier le menu déroulant pour les médias
  // rajout des elements du photographe
  const main = document.getElementById("main");
  const photographersSection = document.querySelector(".photograph-header");

  const triSection = document.createElement("div");
  triSection.className = "photograph-tri";

  const mediasSection = document.createElement("div");
  mediasSection.className = "photograph-main";

  main.appendChild(triSection);
  main.appendChild(mediasSection);

  const photographerModel = photographerFactory(photographer, "photo");
  const userCardDOM = photographerModel.getUserCardDOM();
  photographersSection.appendChild(userCardDOM);
  dossier = photographer.name;

  // rajout des elements du tri
  const triClass = document.createElement("div");
  triClass.className = "triClass";

  triClass.innerHTML = `<div class="triepar">Trié par</div>
  <div class="selection">
    <div class="optionselectionnee"></div>
    <i class="flechehaut fa-solid fa-chevron-down"></i>
  </div>
  <div class="options">
    <div class="option1">
      <div class="date">Date</div>
      <i class="flechebas1 fa-solid fa-chevron-up"></i>
    </div>
    <div class="option2">
      <div class="titre">Titre</div>
      <i class="flechebas2 fa-solid fa-chevron-up"></i>
    </div>
    <div class="option3">
      <div class="popularité">Popularité</div>
      <i class="flechebas3 fa-solid fa-chevron-up"></i>
    </div>
  </div>
  `;

  triSection.appendChild(triClass);

  afficheMedias(dossier);

  const selection = document.querySelector(".selection");
  selection.addEventListener("click", (e) => {
    const option1 = document.querySelector(".option1");
    const option2 = document.querySelector(".option2");
    const option3 = document.querySelector(".option3");
    const flechebas1 = document.querySelector(".flechebas1");
    const flechebas2 = document.querySelector(".flechebas2");
    const flechebas3 = document.querySelector(".flechebas3");
    option1.style.visibility = "visible";
    option2.style.visibility = "visible";
    option3.style.visibility = "visible";
    selection.style.visibility = "hidden";
    flechebas1.style.visibility = "hidden";
    flechebas2.style.visibility = "hidden";
    flechebas3.style.visibility = "hidden";
    option1.addEventListener("click", (e) => {
      mediaTrie = mediaTrie.sort((a, b) => new Date(b.date) - new Date(a.date));
      option1.style.visibility = "hidden";
      option2.style.visibility = "hidden";
      option3.style.visibility = "hidden";
      selection.style.visibility = "visible";
      flechebas1.style.visibility = "visible";
      flechebas2.style.visibility = "hidden";
      flechebas3.style.visibility = "hidden";
      let optionselectionnee = document.querySelector(".optionselectionnee");
      optionselectionnee.textContent = "Date";
      let mediasSection = document.querySelector(".photograph-main");
      while (mediasSection.firstChild) {
        mediasSection.removeChild(mediasSection.firstChild);
      }
      afficheMedias(dossier);
    });
    option2.addEventListener("click", (e) => {
      mediaTrie = mediaTrie.sort((a, b) => a.title.localeCompare(b.title));
      option1.style.visibility = "hidden";
      option2.style.visibility = "hidden";
      option3.style.visibility = "hidden";
      selection.style.visibility = "visible";
      flechebas1.style.visibility = "hidden";
      flechebas2.style.visibility = "visible";
      flechebas3.style.visibility = "hidden";
      let optionselectionnee = document.querySelector(".optionselectionnee");
      optionselectionnee.textContent = "Titre";
      let mediasSection = document.querySelector(".photograph-main");
      while (mediasSection.firstChild) {
        mediasSection.removeChild(mediasSection.firstChild);
      }
      afficheMedias(dossier);
    });
    option3.addEventListener("click", (e) => {
      mediaTrie = mediaTrie.sort((a, b) => b.likes - a.likes);
      option1.style.visibility = "hidden";
      option2.style.visibility = "hidden";
      option3.style.visibility = "hidden";
      selection.style.visibility = "visible";
      flechebas1.style.visibility = "hidden";
      flechebas2.style.visibility = "hidden";
      flechebas3.style.visibility = "visible";
      let optionselectionnee = document.querySelector(".optionselectionnee");
      optionselectionnee.textContent = "Popularité";
      let mediasSection = document.querySelector(".photograph-main");
      while (mediasSection.firstChild) {
        mediasSection.removeChild(mediasSection.firstChild);
      }
      afficheMedias(dossier);
    });
  });
}
function afficheMedias(dossier) {
  //rajout des photos et videos du photographe

  let TotalLike = 0;
  let ordre = 0;
  const mediasSection = document.querySelector(".photograph-main");
  const AfficheLikes = document.querySelector(".Likes");
  for (let i = 0; i < mediaTrie.length; i++) {
    const mediaModel = mediaFactory(mediaTrie[i], dossier, ordre);
    const userMediaDOM = mediaModel.getUserMediaDOM();
    mediasSection.appendChild(userMediaDOM);
    TotalLike += mediaTrie[i].likes;
    ordre++;
  }
  AfficheLikes.textContent = TotalLike;

  AfficheImage(mediaTrie, dossier);
}

//initialisation de la page
async function init() {
  const home = document.createElement("a");
  const logo = document.querySelector(".logo");
  const header = document.querySelector("header");
  home.setAttribute("href", `index.html`);
  home.appendChild(logo);
  header.appendChild(home);
  const body = document.querySelector("body");
  const modalLightbox = document.createElement("div");
  modalLightbox.className = "modalLightbox";
  body.appendChild(modalLightbox);
  //fonction pour récupérer l'id du photographe
  const idPhotographer = await getIDUrl();
  //fonction pour récupérer les éléments du fichier json
  const data = await getData();
  //fonction pour récupérer les éléments du photographe
  const photographer = getPhotographerById(data.photographers, idPhotographer);
  //fonction pour récupérer les médias du photographe
  mediaTrie = getMediasById(data.media, idPhotographer);
  //fonction pour afficher les éléments de la page photographer
  //rajout dans le dom du tri par date titre popularite
  // displayData(photographer, media);
  createLightBox();
  Tri(photographer);

  //fonction pour creer la modal de contact du photographe
  const modalBtn = document.querySelector(".contact_button");
  createModal(photographer.name);
  //fonction pour afficher la modal de contact du photographe
  modalBtn.addEventListener("click", displayModal);
  //fonction pour valider la modal de contact du photographe
  const envoyerBtn = document.querySelector(".contact_envoyer");
  envoyerBtn.addEventListener("click", (e) => {
    //e.preventDefault pour eviter que lorsque je ferme la modale l'url se modifie
    //je perds l'id du photographe sinon
    e.preventDefault();
    return validate();
  });
}
init();
