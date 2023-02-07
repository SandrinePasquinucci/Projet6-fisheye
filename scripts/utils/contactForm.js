function createModal(name) {
  //  function createModal(name, id) {
  let modal = document.querySelector(".modal");

  modal.innerHTML = `
    <header>
    <h2>Contactez-moi</h2>
    <img src="assets/icons/close.svg" onclick="closeModal()" />

  </header>

  <form
  method="get"
              onsubmit="return validate();"
              novalidate>
  <p class=nomphoto>${name}</p>
    <div>
      <label for="prenom">Prénom</label>
      <input id="prenom"/>
      <label for="nom">Nom</label>
      <input id="nom"/>
      <label for="email">Email</label>
      <input id="email"/>
      <label for"message">Votre message</label>
              <textarea
              name="message"
              id="message"
              class="message"
            ></textarea>
      <p id="erreur"></p>
    </div>
    <button class="contact_envoyer">Envoyer</button>
    
  </form>
      `;

  //<div class="idphoto">${id}</div>
}
function validate() {
  let prenom = document.getElementById("prenom");
  let nom = document.getElementById("nom");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let messerreur = document.getElementById("erreur");
  //let idurl = document.querySelector(".idphoto");

  //validation du prénom
  if (prenom.value.length < 2) {
    //récupération du data-error décrit dans le css
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
    //récupération du data-error décrit dans le css
    messerreur.style.display = "block";
    messerreur.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du message.";

    message.focus();
    return false;
  } else {
    messerreur.style.display = "none";
  }
  // console.log(idurl.innerText);
  // queryString = "?id=" + idurl.innerText;
  // //console.log(queryString);

  closemodal();
  return false;
}
function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}
