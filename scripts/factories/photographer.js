function photographerFactory(data, fenetre) {
  const { portrait, name, id, city, country, price, tagline } = data;

  const picture = `assets/photographers/${portrait}`;
  if (fenetre == "index") {
    function getUserCardDOM() {
      const article = document.createElement("article");
      const img = document.createElement("img");

      const Artname = document.createElement("h2");
      const Artcitycountry = document.createElement("div");
      const Artprice = document.createElement("div");
      const Arttagline = document.createElement("div");
      const link = document.createElement("a");

      link.setAttribute("href", `photographer.html?id=${id}`);
      img.setAttribute("src", picture);
      img.setAttribute("alt", name);
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
    function getUserCardDOM() {
      const banniere = document.createElement("div");
      const encart = document.createElement("div");
      const banniereencart = document.createElement("div");
      const txtphotographe = document.createElement("div");
      const contact_button = document.createElement("button");
      const photoimg = document.createElement("img");
      const photoname = document.createElement("h2");
      const photocitycountry = document.createElement("div");
      const photoprice = document.createElement("div");
      const phototagline = document.createElement("div");
      const photoLikes = document.createElement("div");
      const photoLike = document.createElement("i");

      banniere.className = "banniere";
      encart.className = "encart";
      banniereencart.className = "banniereencart";
      txtphotographeclassName = "txtphotographe";
      photoimg.setAttribute("src", picture);
      photoimg.setAttribute("alt", name);
      photoname.textContent = name;
      photocitycountry.className = "citycountry";
      photocitycountry.textContent = city + ", " + country;
      photoprice.className = "price";
      photoprice.textContent = price + "€/jour";
      phototagline.className = "tagline";
      phototagline.textContent = tagline;
      photoLikes.className = "Likes";

      photoLike.className = "fa-solid fa-heart";
      //<button class="contact_button" onclick="displayModal()">Contactez-moi</button>
      contact_button.className = "contact_button";
      contact_button.textContent = "Contactez-moi";

      txtphotographe.appendChild(photoname);
      txtphotographe.appendChild(photocitycountry);
      txtphotographe.appendChild(phototagline);

      encart.appendChild(photoLikes);
      encart.appendChild(photoLike);
      encart.appendChild(photoprice);

      banniere.appendChild(txtphotographe);
      banniere.appendChild(contact_button);
      banniere.appendChild(photoimg);

      banniereencart.appendChild(banniere);
      banniereencart.appendChild(encart);

      return banniereencart;

      // <div class="photograph-header">
      //   <div class="banniereencart">
      //     <div class="banniere">
      //       <div class="txtphotographe">
      //         <h2></h2>
      //         <div class="citycountry"></div>
      //         <div class="tagline"></div>
      //       </div>

      //       <buttom></buttom>
      //       <img></img>
      //     </div>
      //     <div class="encart"></div>
      //   </div>
      // </div>
    }
  }

  return { portrait, name, id, city, country, price, tagline, getUserCardDOM };
}
