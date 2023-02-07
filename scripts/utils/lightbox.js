//lightbox

function activediapo() {
  //Nous allons commencer par aller chercher dans notre page les différents éléments
  //dont nous aurons besoin
  // On récupère le conteneur principal du diaporama
  const maLightbox = document.querySelector(".modalLightbox");
  // Variables globales
  let compteur = 0; // Compteur qui permettra de savoir sur quelle slide nous sommes
  let timer;
  // On récupère le conteneur de tous les éléments
  let content = document.querySelector(".modal-content");
  // On récupère un tableau contenant la liste des diapos
  let slides = Array.from(content.children);

  // On récupère les deux flèches
  let next = document.querySelector(".suivant");
  let prev = document.querySelector(".precedent");
  // Dans la variable "slideWidth" nous allons stocker la largeur visible du diaporama
  // On calcule la largeur visible du diaporama
  let slideWidth = maLightbox.getBoundingClientRect().width;
  // Nous allons placer deux écouteurs d'évènements,
  // un sur chaque flèche, pour gérer le déplacement
  // On met en place les écouteurs d'évènements sur les flèches
  next.addEventListener("click", slideNext);
  prev.addEventListener("click", slidePrev);

  /**
   * Cette fonction fait défiler le diaporama vers la droite
   */
  function slideNext() {
    // On incrémente le compteur
    compteur++;
    // Si on dépasse la fin du diaporama, on "rembobine"
    console.log(slides.length);
    if (compteur == slides.length) {
      compteur = 0;
    }
    // On calcule la valeur du décalage
    let decal = -slideWidth * compteur;
    content.style.transform = `translateX(${decal}px)`;
  }
  /**
   * Cette fonction fait défiler le diaporama vers la gauche
   */
  function slidePrev() {
    // On décrémente le compteur
    compteur--;
    // Si on dépasse le début du diaporama, on repart à la fin
    if (compteur < 0) {
      compteur = slides.length - 1;
    }
    // On calcule la valeur du décalage
    let decal = -slideWidth * compteur;
    content.style.transform = `translateX(${decal}px)`;
  }
  // // Nous utiliseront un intervalle, stocké dans la variable "timer"
  // // pour faire défiler le diaporama toutes les 4 secondes
  // // Automatiser le diaporama
  // timer = setInterval(slideNext, 4000);
  // // Cette automatisation a un inconvénient, elle ne s'arrête jamais,
  // // même lorsque nous cliquons sur une flèche.
  // // Nous allons donc mettre en place un arrêt au survol du diaporama.
  // // Gérer le survol de la souris
  // maLightbox.addEventListener("mouseover", stopTimer);
  // maLightbox.addEventListener("mouseout", startTimer);
  // /**
  //  * On stoppe le défilement
  //  */
  // function stopTimer() {
  //   clearInterval(timer);
  // }
  // /**
  //  * On redémarre le défilement
  //  */
  // function startTimer() {
  //   timer = setInterval(slideNext, 4000);
  // }
  // Mise en oeuvre du "responsive"
  window.addEventListener("resize", () => {
    slideWidth = maLightbox.getBoundingClientRect().width;
    slideNext();
  });
}
function createLightBox(media, dossier) {
  let body = document.querySelector("body");
  let modalLightbox = document.createElement("div");
  modalLightbox.className = "modalLightbox";
  let closeIcone = document.createElement("i");
  closeIcone.className = "closeLB fa-solid fa-xmark";
  let precedent = document.createElement("i");
  precedent.className = "precedent fa-solid fa-chevron-left";
  let suivant = document.createElement("i");
  suivant.className = "suivant fa-solid fa-chevron-right ";
  let modalcontent = document.createElement("div");
  modalcontent.className = "modal-content";

  modalLightbox.appendChild(modalcontent);

  modalLightbox.appendChild(precedent);
  modalLightbox.appendChild(suivant);
  modalLightbox.appendChild(closeIcone);
  body.appendChild(modalLightbox);

  let fermeLB = document.querySelector(".closeLB");
  fermeLB.addEventListener("click", closeLightbox);

  let ouvreLB = document.querySelectorAll(".card");
  ouvreLB.forEach((crt) => crt.addEventListener("click", displayLightbox));

  for (let i = 0; i < media.length; i++) {
    let LBModel = LightBoxFactory(media[i], dossier);
    let userLBDOM = LBModel.getLightBox();
    modalcontent.appendChild(userLBDOM);
  }
  activediapo();
}

function displayLightbox() {
  let modalLB = document.querySelector(".modalLightbox");
  modalLB.style.display = "block";
}

function closeLightbox() {
  let modalLB = document.querySelector(".modalLightbox");
  modalLB.style.display = "none";
}

function LightBoxFactory(data, dossier) {
  let { id, title, image, video, likes, date, price } = data;

  const picture = `assets/SamplePhotos/${dossier}`;

  function getLightBox() {
    let cardLight = document.createElement("div");
    let imgLight = document.createElement("img");
    let vidLight = document.createElement("video");
    let sourceLight = document.createElement("source");
    let medTitleLight = document.createElement("div");

    if (video === undefined) {
      imgLight.setAttribute("src", `${picture}/${image}`);

      cardLight.appendChild(imgLight);
    } else {
      vidLight.setAttribute("width", "320");
      vidLight.setAttribute("height", "240");
      vidLight.setAttribute("controls", "");
      sourceLight.setAttribute("src", `${picture}/${video}`);
      sourceLight.setAttribute("type", "video/mp4");
      vidLight.appendChild(sourceLight);
      cardLight.appendChild(vidLight);
    }
    cardLight.className = "cardLight";
    medTitleLight.className = "medTitleLight";
    medTitleLight.textContent = title;

    cardLight.appendChild(medTitleLight);

    return cardLight;
  }

  return { id, title, image, video, likes, date, price, getLightBox };
}
