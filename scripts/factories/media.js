function mediaFactory(data, dossier, ordre) {
  const { id, title, image, video, likes, date, price } = data;

  const picture = `assets/SamplePhotos/${dossier}`;

  function getUserMediaDOM() {
    const card = document.createElement("div");
    const description = document.createElement("div");
    const img = document.createElement("img");
    const vid = document.createElement("video");
    const source = document.createElement("source");

    const medTitle = document.createElement("div");
    const medLikes = document.createElement("div");
    const medLike = document.createElement("i");

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
      const AfficheLikes = document.querySelector(".Likes");

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
