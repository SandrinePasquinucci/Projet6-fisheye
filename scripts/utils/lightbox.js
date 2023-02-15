//LightBox
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
function AfficheImage(data, dossier) {
  let ouvreLB = document.querySelectorAll(".card");
  ouvreLB.forEach((crt) =>
    crt.addEventListener("click", (e) => {
      const parentElement = e.target.closest(".card");
      currentIndex = parentElement.dataset.id;

      displayLightbox(data[currentIndex], dossier);
      let fermeLB = document.querySelector(".closeLB");
      fermeLB.addEventListener("click", closeLightbox);
      // On récupère les deux flèches
      let next = document.querySelector(".suivant");
      let prev = document.querySelector(".precedent");
      next.addEventListener("click", (e) => {
        slideNext(mediaTrie, dossier);
      });
      prev.addEventListener("click", slidePrev);
    })
  );
}
function displayLightbox(data, dossier) {
  const modalLB = document.querySelector(".modalLightbox");
  modalLB.style.display = "block";
  const modalcontent = document.querySelector(".modal-content");

  const { id, title, image, video, likes, date, price } = data;

  const picture = `assets/SamplePhotos/${dossier}`;

  const imgLight = document.createElement("img");
  const vidLight = document.createElement("video");
  const sourceLight = document.createElement("source");
  const medTitleLight = document.createElement("div");

  if (video === undefined) {
    imgLight.setAttribute("src", `${picture}/${image}`);
    // imgLight.setAttribute("width", "650");
    // imgLight.setAttribute("height", "600");
    modalcontent.appendChild(imgLight);
  } else {
    vidLight.setAttribute("width", "820");
    vidLight.setAttribute("height", "740");
    vidLight.setAttribute("controls", "");
    sourceLight.setAttribute("src", `${picture}/${video}`);
    sourceLight.setAttribute("type", "video/mp4");
    vidLight.appendChild(sourceLight);
    modalcontent.appendChild(vidLight);
  }

  medTitleLight.className = "medTitleLight";
  medTitleLight.textContent = title;

  modalcontent.appendChild(medTitleLight);
}

function closeLightbox() {
  const modalLB = document.querySelector(".modalLightbox");
  modalLB.style.display = "none";
  const modalcontent = document.querySelector(".modal-content");
  while (modalcontent.firstChild) {
    modalcontent.removeChild(modalcontent.firstChild);
  }
}

function slideNext(mediaTrie, dossier) {
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
