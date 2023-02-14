function photographerFactory(data, fenetre) {
  let { portrait, name, id, city, country, price, tagline } = data;

  const picture = `assets/photographers/${portrait}`;
  if (fenetre == "index") {
    function getUserCardDOM() {
      let article = document.createElement("article");
      let img = document.createElement("img");

      let Artname = document.createElement("h2");
      let Artcitycountry = document.createElement("div");
      let Artprice = document.createElement("div");
      let Arttagline = document.createElement("div");
      let link = document.createElement("a");

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
      let banniere = document.createElement("div");
      let encart = document.createElement("div");
      let banniereencart = document.createElement("div");
      let txtphotographe = document.createElement("div");
      let contact_button = document.createElement("button");
      let photoimg = document.createElement("img");
      let photoname = document.createElement("h2");
      let photocitycountry = document.createElement("div");
      let photoprice = document.createElement("div");
      let phototagline = document.createElement("div");
      let photoLikes = document.createElement("div");
      let photoLike = document.createElement("i");

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
