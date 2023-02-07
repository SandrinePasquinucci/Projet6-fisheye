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

//comment trier le menu déroulant pour les médias

function myfunctionTri(medias) {
  //on recupere le texte selectionné dans le menu déroulant
  //https://grafikart.fr/forum/18998
  let selectElmt = document.getElementById("listeClass");

  //var valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].value;
  let textselectionne = selectElmt.options[selectElmt.selectedIndex].text;
  let mediasTire = []; //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  if (textselectionne == "Date") {
    //medias.sort(function (a, b) {
    [
      ...medias.sort(function (a, b) {
        return a.date - b.date;
      }),
    ];
    // });
  }
  if (textselectionne == "Titre") {
    //medias.sort(function (a, b) {
    [
      ...medias.sort(function (a, b) {
        return a.title.toLowerCase() - b.title.toLowerCase();
      }),
    ];

    //return a.title.toLowerCase() - b.title.toLowerCase();
    //  });
  }
  if (textselectionne == "Popularité") {
    // medias.sort(function (a, b) {
    //   return a.likes - b.likes;
    // });

    [
      ...medias.sort(function (a, b) {
        if (a.likes < b.likes) {
          return 1;
        }
        if (a.likes > b.likes) {
          return -1;
        }
        return 0;
      }),
    ];
  }
  console.log(medias);
  return medias;
}

//comment creer le menu déroulant du tri
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

  select.addEventListener("change", (e) => {
    const mediatrie = myfunctionTri(medias);
  });
  return triClass;
}

//ici on modifie le dom
// on rajoute la partie tri puis le detail du photographe puis les photos videos
async function displayData(photographers, medias) {
  //creation des div dans le dom
  //banniere + photo
  let photographersSection = document.querySelector(".photograph-header");
  let main = document.getElementById("main");
  let triSection = document.createElement("div");
  triSection.className = "photograph-tri";
  let mediasSection = document.createElement("div");
  mediasSection.className = "photograph-main";
  main.appendChild(triSection);
  main.appendChild(mediasSection);

  //rajout dans le dom du tri par date titre popularite
  let triDOM = tri(medias);
  triSection.appendChild(triDOM);

  // rajout des elements du photographe
  let photographerModel = photographerFactory(photographers, "photo");
  let userCardDOM = photographerModel.getUserCardDOM();
  photographersSection.appendChild(userCardDOM);
  dossier = photographers.name;

  //rajout des photos et videos du photographe
  let TotalLike = 0;

  let AfficheLikes = document.querySelector(".Likes");
  for (let i = 0; i < medias.length; i++) {
    let mediaModel = mediaFactory(medias[i], dossier);
    let userMediaDOM = mediaModel.getUserMediaDOM();
    mediasSection.appendChild(userMediaDOM);
    TotalLike += medias[i].likes;
  }
  AfficheLikes.textContent = TotalLike;
  createLightBox(medias, dossier);
}

//initialisation de la page
async function init() {
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
  displayData(photographer, media);
  //fonction pour creer la modal de contact du photographe
  let modalBtn = document.querySelector(".contact_button");
  createModal(photographer.name);
  //createModal(photographer.name, photographer.id);
  //fonction pour afficher la modal de contact du photographe
  modalBtn.addEventListener("click", displayModal);
  //fonction pour valider la modal de contact du photographe
  let envoyerBtn = document.querySelector(".contact_envoyer");
  envoyerBtn.addEventListener("click", validate);
}
init();
