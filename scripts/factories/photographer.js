function photographerFactory(data, fenetre) {
  console.log(fenetre);
  const { portrait, name, id, city, country, price, tagline } = data;

  const picture = `assets/photographers/${portrait}`;
  if ((fenetre == "index")) {
    function getUserCardDOM() {
      const article = document.createElement("article");
      const img = document.createElement("img");
      const a = document.createElement("a");
      const Artname = document.createElement("h2");
      const Artcitycountry = document.createElement("div");
      const Artprice = document.createElement("div");
      const Arttagline = document.createElement("div");
      const link = document.createElement("a");

      link.setAttribute("href", `photographer.html?id=${id}`);
      img.setAttribute("src", picture);
      Artname.textContent = name;
      Artcitycountry.className = "Artcitycountry";
      Artcitycountry.textContent = city + ", " + country;
      Artprice.className = "Artprice";
      Artprice.textContent = price + "€/jour";
      Arttagline.className = "Arttagline";
      Arttagline.textContent = tagline;

      article.appendChild(img);
      article.appendChild(Artname);
      article.appendChild(Artcitycountry);
      article.appendChild(Arttagline);
      article.appendChild(Artprice);

      link.appendChild(article);

      return link;
    }
  } else {
    console.log("test");
    function getUserCardDOM() {
      const banniere = document.createElement("div");
      const txtphotographe = document.createElement("div");
      const contact_button = document.createElement("button");
      const photoimg = document.createElement("img");

      const photoname = document.createElement("h2");
      const photocitycountry = document.createElement("div");
      const photoprice = document.createElement("div");
      const phototagline = document.createElement("div");

      banniere.className = "banniere";
      txtphotographeclassName = "txtphotographe";
      photoimg.setAttribute("src", picture);
      photoname.textContent = name;
      photocitycountry.className = "citycountry";
      photocitycountry.textContent = city + ", " + country;
      photoprice.className = "price";
      photoprice.textContent = price + "€/jour";
      phototagline.className = "tagline";
      phototagline.textContent = tagline;
      //<button class="contact_button" onclick="displayModal()">Contactez-moi</button>
      contact_button.className = "contact_button";
      contact_button.textContent = "Contactez-moi";

      txtphotographe.appendChild(photoname);
      txtphotographe.appendChild(photocitycountry);
      txtphotographe.appendChild(phototagline);

      banniere.appendChild(txtphotographe);
      banniere.appendChild(contact_button);
      banniere.appendChild(photoimg);

      return banniere;
    }
  }

  return { portrait, name, id, city, country, price, tagline, getUserCardDOM };
}

//  <div class="photograph-header">
//     <div class="banniere">
//         <div class="txtphotographe">
//             <h2></h2>
//             <div class="citycountry"></div>
//             <div class="tagline"></div>
//         </div>
//         <buttom></buttom>
//         <img></img>
//     </banniere>
// </div>
