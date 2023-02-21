//LightBox

//Création du DOM fixe pour la lightbox
function createLightBox() {
  const modalLightbox = document.querySelector(".modalLightbox");
  const closeIcone = document.createElement("i");
  closeIcone.className = "closeLB fa-solid fa-xmark";
  const precedent = document.createElement("i");
  precedent.className = "precedent fa-solid fa-chevron-left";
  const suivant = document.createElement("i");
  suivant.className = "suivant fa-solid fa-chevron-right ";
  const modalcontent = document.createElement("div");
  modalcontent.className = "modal-content";
  modalLightbox.appendChild(modalcontent);
  modalLightbox.appendChild(precedent);
  modalLightbox.appendChild(suivant);
  modalLightbox.appendChild(closeIcone);
}
// on ecoute les évenements sur pour le click ou touche entrer
function AfficheImage(data, dossier) {
  //clic sur une image ou video ouverture de la LightBox
  //l'evenement est sur le media car sinon la fonctionnalité Like ne fonctionne plus
  let ouvreLB = document.querySelectorAll(".media");
  ouvreLB.forEach((media) =>
    media.addEventListener("click", (e) => {
      //je recupere donc la div supérieure pour rechercher l'ordre
      const parentElement = media.closest(".card");
      //je recupere l'id div dans le dom
      const parentElementId = e.target.closest(".card");
      currentIndex = parentElement.dataset.id;
      //j'affiche les élements du media correspondant à l'ordre
      displayLightbox(data[currentIndex], dossier);
    })
  );
  //touche entrer sur une image ou video ouverture de la LightBox
  ouvreLB.forEach((crt) =>
    crt.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const parentElement = media.closest(".card");
        const parentElementId = e.target.closest(".card");
        currentIndex = parentElement.dataset.id;
        displayLightbox(data[currentIndex], dossier);
      }
    })
  );
  // On récupère les deux flèches precedent suivant
  let next = document.querySelector(".suivant");
  let prev = document.querySelector(".precedent");
  next.addEventListener("click", slideNext);
  next.addEventListener("keypress", (e) => {
    if (e.key === "Arrow Right") {
      slideNext();
    }
  });
  prev.addEventListener("click", slidePrev);
  prev.addEventListener("keypress", (e) => {
    if (e.key === "Arrow Left") {
      slidePrev();
    }
  });

  //on gere le clic sur l'icone fermer et la touche entrer
  let fermeLB = document.querySelector(".closeLB");
  fermeLB.addEventListener("click", closeLightbox);
  fermeLB.addEventListener("keypress", (e) => {
    if (e.key === "Esc") {
      closeLightbox();
    }
  });
}
//fonction qui permet l'affiche de l'image ou de la video selectionnée
function displayLightbox(data, dossier) {
  const modalLB = document.querySelector(".modalLightbox");
  modalLB.style.display = "block";

  const main = document.getElementById("main");

  modalLB.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "true");
  const modalcontent = document.querySelector(".modal-content");

  const { id, title, image, video, likes, date, price } = data;

  const picture = `assets/SamplePhotos/${dossier}`;

  const imgLight = document.createElement("img");
  const vidLight = document.createElement("video");
  const sourceLight = document.createElement("source");
  const medTitleLight = document.createElement("div");

  //cas d'une photo
  if (video === undefined) {
    imgLight.setAttribute("src", `${picture}/${image}`);
    imgLight.setAttribute("alt", image);
    modalcontent.appendChild(imgLight);
  } else {
    //cas d'une video
    vidLight.setAttribute("width", "820");
    vidLight.setAttribute("height", "740");
    vidLight.setAttribute("controls", "");
    sourceLight.setAttribute("src", `${picture}/${video}`);
    sourceLight.setAttribute("type", "video/mp4");
    sourceLight.setAttribute("alt", video);
    vidLight.appendChild(sourceLight);
    modalcontent.appendChild(vidLight);
  }

  medTitleLight.className = "medTitleLight";
  medTitleLight.textContent = title;

  modalcontent.appendChild(medTitleLight);
}

//fonction qui permet la fermeture de la LightBox
function closeLightbox() {
  const modalLB = document.querySelector(".modalLightbox");
  modalLB.style.display = "none";
  const main = document.getElementById("main");

  modalLB.setAttribute("aria-hidden", "true");
  main.setAttribute("aria-hidden", "false");
  const modalcontent = document.querySelector(".modal-content");
  //on supprime le contenu de la div modal-content
  while (modalcontent.firstChild) {
    modalcontent.removeChild(modalcontent.firstChild);
  }
}

//Fonction qui permet l'affiche du média suivant
function slideNext() {
  // On vide la div affichee (photo+titre)
  const modalcontent = document.querySelector(".modal-content");
  while (modalcontent.firstChild) {
    modalcontent.removeChild(modalcontent.firstChild);
  }

  // On incrémente le compteur
  currentIndex++;

  // Si on dépasse la fin du diaporama, on revient au début

  if (currentIndex == mediaTrie.length) {
    currentIndex = 0;
  }
  // On affiche l'image suivante
  displayLightbox(mediaTrie[currentIndex], dossier);
}

//Fonction qui permet l'affiche du média précedent
function slidePrev() {
  // On vide la div affichee (photo+titre)
  const modalcontent = document.querySelector(".modal-content");
  while (modalcontent.firstChild) {
    modalcontent.removeChild(modalcontent.firstChild);
  }
  // On décrémente le compteur
  currentIndex--;
  // Si on dépasse le début du diaporama, on repart à la fin
  if (currentIndex < 0) {
    currentIndex = mediaTrie.length - 1;
  }
  // On affiche l'image precedente
  displayLightbox(mediaTrie[currentIndex], dossier);
}
