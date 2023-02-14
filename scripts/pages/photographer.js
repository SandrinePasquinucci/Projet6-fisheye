//comment recuperer l'id collée dans l'url de la page
//https://www.sitepoint.com/get-url-parameters-with-javascript/
async function getIDUrl() {
  const queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let photographerId = urlParams.get("id");
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
function Tri(photographer, media) {
  //comment trier le menu déroulant pour les médias
  // rajout des elements du photographe
  let main = document.getElementById("main");
  let photographersSection = document.querySelector(".photograph-header");

  let triSection = document.createElement("div");
  triSection.className = "photograph-tri";

  let mediasSection = document.createElement("div");
  mediasSection.className = "photograph-main";

  main.appendChild(triSection);
  main.appendChild(mediasSection);

  let photographerModel = photographerFactory(photographer, "photo");
  let userCardDOM = photographerModel.getUserCardDOM();
  photographersSection.appendChild(userCardDOM);
  dossier = photographer.name;

  // rajout des elements du tri
  let triClass = document.createElement("div");
  triClass.className = "triClass";

  triClass.innerHTML = `<div class="triepar">Trié par</div>
  <div class="selection">
    <div class="optionselectionnee"></div>
    <i class="flechehaut fa-solid fa-chevron-down"></i>
  </div>
  <div class="options">
    <div class="option1">
      <div class="date">Date</div>
      <i class="flechebas fa-solid fa-chevron-up"></i>
    </div>
    <div class="option2">
      <div class="titre">Titre</div>
      <i class="flechebas fa-solid fa-chevron-up"></i>
    </div>
    <div class="option3">
      <div class="popularité">Popularité</div>
      <i class="flechebas fa-solid fa-chevron-up"></i>
    </div>
  </div>
  `;

  triSection.appendChild(triClass);

  afficheMedias(media, dossier);

  let selection = document.querySelector(".selection");
  selection.addEventListener("click", (e) => {
    let option1 = document.querySelector(".option1");
    let option2 = document.querySelector(".option2");
    let option3 = document.querySelector(".option3");
    option1.style.visibility = "visible";
    option2.style.visibility = "visible";
    option3.style.visibility = "visible";
    selection.style.visibility = "hidden";
    option1.addEventListener("click", (e) => {
      mediatrie = media.sort((a, b) => new Date(b.date) - new Date(a.date));
      option1.style.visibility = "hidden";
      option2.style.visibility = "hidden";
      option3.style.visibility = "hidden";
      selection.style.visibility = "visible";
      let optionselectionnee = document.querySelector(".optionselectionnee");
      optionselectionnee.textContent = "Date";
      let mediasSection = document.querySelector(".photograph-main");
      while (mediasSection.firstChild) {
        mediasSection.removeChild(mediasSection.firstChild);
      }
      afficheMedias(mediatrie, dossier);
    });
    option2.addEventListener("click", (e) => {
      mediatrie = media.sort((a, b) => a.title.localeCompare(b.title));
      option1.style.visibility = "hidden";
      option2.style.visibility = "hidden";
      option3.style.visibility = "hidden";
      selection.style.visibility = "visible";
      let optionselectionnee = document.querySelector(".optionselectionnee");
      optionselectionnee.textContent = "Titre";
      let mediasSection = document.querySelector(".photograph-main");
      while (mediasSection.firstChild) {
        mediasSection.removeChild(mediasSection.firstChild);
      }
      afficheMedias(mediatrie, dossier);
    });
    option3.addEventListener("click", (e) => {
      mediatrie = media.sort((a, b) => b.likes - a.likes);
      option1.style.visibility = "hidden";
      option2.style.visibility = "hidden";
      option3.style.visibility = "hidden";
      selection.style.visibility = "visible";
      let optionselectionnee = document.querySelector(".optionselectionnee");
      optionselectionnee.textContent = "Popularité";
      let mediasSection = document.querySelector(".photograph-main");
      while (mediasSection.firstChild) {
        mediasSection.removeChild(mediasSection.firstChild);
      }
      afficheMedias(mediatrie, dossier);
    });
  });
}
function afficheMedias(media, dossier) {
  //rajout des photos et videos du photographe

  let TotalLike = 0;
  let ordre = 0;
  let mediasSection = document.querySelector(".photograph-main");
  let AfficheLikes = document.querySelector(".Likes");
  for (let i = 0; i < media.length; i++) {
    let mediaModel = mediaFactory(media[i], dossier, ordre);
    let userMediaDOM = mediaModel.getUserMediaDOM();
    mediasSection.appendChild(userMediaDOM);
    TotalLike += media[i].likes;
    ordre++;
  }
  AfficheLikes.textContent = TotalLike;
  createLightBox(media, dossier);
}

//initialisation de la page
async function init() {
  let home = document.createElement("a");
  let logo = document.querySelector(".logo");
  let header = document.querySelector("header");
  home.setAttribute("href", `index.html`);
  home.appendChild(logo);
  header.appendChild(home);
  //fonction pour récupérer l'id du photographe
  let idPhotographer = await getIDUrl();
  //fonction pour récupérer les éléments du fichier json
  const data = await getData();
  //fonction pour récupérer les éléments du photographe
  const photographer = getPhotographerById(data.photographers, idPhotographer);
  //fonction pour récupérer les médias du photographe
  const media = getMediasById(data.media, idPhotographer);
  //fonction pour afficher les éléments de la page photographer
  //rajout dans le dom du tri par date titre popularite
  // displayData(photographer, media);
  Tri(photographer, media);
  //fonction pour creer la modal de contact du photographe
  let modalBtn = document.querySelector(".contact_button");
  createModal(photographer.name);
  //fonction pour afficher la modal de contact du photographe
  modalBtn.addEventListener("click", displayModal);
  //fonction pour valider la modal de contact du photographe
  let envoyerBtn = document.querySelector(".contact_envoyer");
  envoyerBtn.addEventListener("click", (e) => {
    //e.preventDefault pour eviter que lorsque je ferme la modale l'url se modifie
    //je perds l'id du photographe sinon
    e.preventDefault();
    return validate();
  });
}
init();
