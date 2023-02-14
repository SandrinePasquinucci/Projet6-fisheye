function mediaFactory(data, dossier, ordre) {
  let { id, title, image, video, likes, date, price } = data;

  const picture = `assets/SamplePhotos/${dossier}`;

  function getUserMediaDOM() {
    let card = document.createElement("div");
    let description = document.createElement("div");
    let img = document.createElement("img");
    let vid = document.createElement("video");
    let source = document.createElement("source");

    let medTitle = document.createElement("div");
    let medLikes = document.createElement("div");
    let medLike = document.createElement("i");

    if (video === undefined) {
      img.setAttribute("src", `${picture}/${image}`);
      img.setAttribute("alt", image);
      card.appendChild(img);
    } else {
      vid.setAttribute("width", "320");
      vid.setAttribute("height", "240");
      vid.setAttribute("controls", "");
      source.setAttribute("src", `${picture}/${video}`);
      source.setAttribute("alt", video);
      source.setAttribute("type", "video/mp4");
      vid.appendChild(source);
      card.appendChild(vid);
    }
    card.className = "card";
    card.dataset.id = ordre;
    //card.setAttribute("ID", ordre);
    description.className = "description";
    medTitle.className = "medTitle";
    medTitle.textContent = title;
    medLikes.className = "medLike";
    medLikes.textContent = likes;
    medLike.className = "fa-solid fa-heart";

    card.appendChild(description);
    description.appendChild(medTitle);
    description.appendChild(medLikes);
    description.appendChild(medLike);

    //gestion des likes

    medLike.addEventListener("click", function () {
      let AfficheLikes = document.querySelector(".Likes");

      if (medLikes.textContent == data.likes) {
        medLikes.textContent = +medLikes.textContent + 1;
        likes += 1;
        AfficheLikes.textContent = +AfficheLikes.textContent + 1;
      }
    });
    return card;
  }

  return { id, title, image, video, likes, date, price, getUserMediaDOM };
}
