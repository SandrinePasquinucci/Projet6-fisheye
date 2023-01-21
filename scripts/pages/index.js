
   async function getPhotographers() {
//         //je charge les données du fichier photographers.json je les stocke dans photographers 

        // fetch('./data/photographers.json')
        //  .then(reponse=>reponse.json())
        //  .then ((reponse1) => {
   
        //     const photographers = reponse1.photographers;  
        //      console.log(photographers);
            
           
        
            
        //   });
        //   return {photographers: [...photographers]} 
     
      

//      };
// async function fetchPhotographersJSON() {
// const response = await fetch("./data/photographers.json");
// const reponse1 = await response.json();
// return reponse1;
// }
// fetchPhotographersJSON.then(reponse1 => {
//     const photographers = reponse1.photographers;  
// });
//    return {
//                   photographers: [...photographers]
                
//                   }
                
//}
//async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    
    // marche pas
    //         fetch("./data/photographers.json")
    //      .then(reponse=>reponse.json())
    //      .then ((reponse2) => {
    //         console.log(reponse2);
    //         let photographers = reponse2.photographers;
    //         console.log(photographers);
    //         // return {
    //         //     photographers: [...photographers]
    //         //     }
        
            
    //      });

    //  return {
    //              photographers: [...photographers]
    //              }

    const url = './data/photographers.json';
    const requete = await fetch(url, {
        method: 'GET'
    });

  
        let data = await requete.json();
        const photographers = data.photographers;
        // console.log(photographers)
    
        
    
    
     return {
         photographers: [...photographers]
   
         }
//exemple fourni par ocr
    // let photographers = [
    //     {
    //         "name": "Ma data test",
    //         "id": 1,
    //         "city": "Paris",
    //         "country": "France",
    //         "tagline": "Ceci est ma data test",
    //         "price": 400,
    //         "portrait": "account.png"
    //     },
    //     {
    //         "name": "Autre data test",
    //         "id": 2,
    //         "city": "Londres",
    //         "country": "UK",
    //         "tagline": "Ceci est ma data test 2",
    //         "price": 500,
    //         "portrait": "account.png"
    //     },
    // ]
    // et bien retourner le tableau photographers seulement une fois récupéré
    //return ({
    //    photographers: [...photographers, ...photographers, ...photographers]})
}




// fonctions photographerFactory et getUserCardDom sont décrite dans ./scripts/factories/photographer.js
// fonctions qui permettent de dispatcher les infos des 6 lignes du fichier photographers
// une ligne par photographe
//et de l'afficher dans le dom
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        //const photographers await (attend le résultat de la fonction getphotographer definie plus haut)
        const { photographers } = await getPhotographers();
        console.log(photographers);
        //fonction displaydata est defini plus haut 
        displayData(photographers);
        console.log(photographers);
    };

    //initialisation de la page index et affchage des photographes présent dans le fichier json
    init();
    
