function createModal(name) {
  //creation du dom
  const modal = document.querySelector(".modal");
  modal.innerHTML = `
    <header>
      <h2>Contactez-moi</h2>
      <img src="assets/icons/close.svg" alt="close" onclick="closeModal()" />
      
    </header>
    <p class=nomphoto>${name}</p>
    <form
      method="get"
      onsubmit="return validate();"
      novalidate>
      

        <label for="prenom">Prénom</label>
          <input id="prenom" type="prenom" name="prenom" 
            aria-labelledby="prenom" aria-describedby="prenom" aria-required=true />
        <label for="nom">Nom</label>
          <input id="nom"type="nom" name="nom"
            aria-labelledby="nom" aria-describedby="nom" aria-required=true/>
        <label for="email">Email</label>
          <input id="email" type="email" name="email"
            aria-labelledby="email" aria-describedby="email" aria-required=true/>
        <label for="message">Votre message</label>
          <textarea
            name="message"
            id="message"
            class="message"
            aria-labelledby="message" aria-describedby="message" aria-required=true
          ></textarea>
        <p id="erreur"></p>
    
      <button class="contact_envoyer" type=submit  >Envoyer</button>
    
    </form>
  `;
}

//fonction qui valide le formulaire
function validate() {
  const prenom = document.getElementById("prenom");
  const nom = document.getElementById("nom");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const messerreur = document.getElementById("erreur");

  //validation du prénom
  if (prenom.value.length < 2) {
    messerreur.style.display = "block";
    messerreur.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";

    prenom.focus();
    return false;
  } else {
    messerreur.style.display = "none";
  }
  //validation du nom
  if (nom.value.length < 2) {
    messerreur.style.display = "block";
    messerreur.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

    nom.focus();
    return false;
  } else {
    messerreur.style.display = "none";
  }

  //validation de l'email
  //   //utilisation d'un regex trouvé sur internet pour vérifier la validité de la saisie utilisateur
  let mailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (mailvalid.test(email.value)) {
    messerreur.style.display = "none";
  } else {
    messerreur.style.display = "block";
    messerreur.textContent = "Veuillez entrer un email valide";

    email.focus();
    return false;
  }
  //validation du message
  if (message.value.length < 2) {
    messerreur.style.display = "block";
    messerreur.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du message.";

    message.focus();
    return false;
  } else {
    messerreur.style.display = "none";
  }

  //affichage des éléments valides saisis dans le formulaire
  console.log(
    "Votre prénom : " +
      prenom.value +
      ", votre nom : " +
      nom.value +
      ", votre email : " +
      email.value +
      ", votre message : " +
      message.value
  );

  closeModal();
  return false;
}

//Affichage de la modale
function displayModal() {
  const modal = document.getElementById("contact_modal");
  const main = document.getElementById("main");
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "true");
  const prenom = document.getElementById("prenom");
  prenom.focus();
  //on gere la fermeture de la modal par la touche esc

  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

//fermeture de la modale
function closeModal() {
  const modal = document.getElementById("contact_modal");
  const main = document.getElementById("main");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  main.setAttribute("aria-hidden", "false");
  const tri = document.querySelector(".optionselectionnee");
  tri.focus();
}
