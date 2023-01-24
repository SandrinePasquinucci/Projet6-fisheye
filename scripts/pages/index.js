
   async function getPhotographers() {


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
          //appel de la fonction getphotgraphers va lire le fichier json (BDD)
        const { photographers } = await getPhotographers();
        console.log(photographers);
        //fonction displaydata est defini plus haut
        //elle se positionne sur la partie de l'html pour laquelle on souhaite afficher les données
        // elle va lire les données photographerFactory
        // elle va creer une card par photographe (chaque photographe ses infos) GetUserCardDom
        // elle alimente l'html des infos photographes (appendchild ajoute un noeud aux enfantr)
        displayData(photographers);
        console.log(photographers);
    };

    //initialisation de la page index et affchage des photographes présent dans le fichier json
    init();
    

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
