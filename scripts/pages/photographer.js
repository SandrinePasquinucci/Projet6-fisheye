//Mettre le code JavaScript lié à la page photographer.html

    
    
    
    
    // fonctions photographerFactory et getUserCardDom sont décrite dans ./scripts/factories/photographer.js
    // fonctions qui permettent de dispatcher les infos des 6 lignes du fichier photographers
    // une ligne par photographe
    //et de l'afficher dans le dom
        async function displayData(photographers) {
            const photographersSectionById = document.querySelector(".photograph-header");
    
          
                const photographerModel = photographerFactoryById(photographer.id);
                const userCardDOM = photographerModel.getUserCardDOM();
                photographersSection.appendChild(userCardDOM);
          
        };
    
        async function init(ID) {
            // Récupère les datas des photographes
            //const photographers await (attend le résultat de la fonction getphotographer definie plus haut)
          
            const logo = document.querySelector(".logo");
            const Id = document.getElementById(photographers.id);
            closeBtn.addEventListener("click", photographerFactoryByID);
        };
    
        //initialisation de la page index et affchage des photographes présent dans le fichier json
        init(ID);