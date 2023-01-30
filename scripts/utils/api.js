export async function getPhotographers() {
  return fetch("./data/photographers.json")
    .then((reponse) => reponse.json())
    .then((data) => data.photographers)
    .catch((erreur) => console.log(erreur));
}
