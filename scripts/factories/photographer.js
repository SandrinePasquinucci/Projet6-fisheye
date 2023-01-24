

function photographerFactory(data) {
    //existant mis en commentaire
   // const { name, portrait } = data;
   const { portrait,name, id, city, country, price,  tagline } = data;
   console.log(data.id);
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const a = document.createElement('a');
        const Artname = document.createElement( 'h2' ); 
        const Artcitycountry = document.createElement( 'div' );
        const Artprice = document.createElement( 'div' );
        const Arttagline = document.createElement( 'div' );
        
   
        img.setAttribute("src", picture)
        Artname.textContent = name;
        Artcitycountry.className = "Artcitycountry"
        Artcitycountry.textContent = city + ", " +country;
        Artprice.className = "Artprice"
        Artprice.textContent =price + "€/jour";
        Arttagline.className = "Arttagline"
        Arttagline.textContent = tagline;
        


        article.appendChild(img);
        article.appendChild(Artname);
        
        article.appendChild(Artcitycountry);
        article.appendChild(Arttagline);
        article.appendChild(Artprice);
       
        
        
        console.log(article)
        return (article);
      
    }
    
    return { portrait,name, id, country, price,  tagline ,
        getUserCardDOM} 
}

// function photographerFactory(data) {
//     const { name, portrait } = data;

//     const picture = `assets/photographers/${portrait}`;

//     function getUserCardDOM() {
//         const article = document.createElement( 'article' );
//         const img = document.createElement( 'img' );
//         //img.setAttribute("src", picture)
//         const h2 = document.createElement( 'h2' );
//         h2.textContent = name;
//         article.appendChild(img);
//         article.appendChild(h2);
//         return (article);
//     }
//     return { name, picture, getUserCardDOM }
// }

function photographerFactoryByID(ID,data) {
    //existant mis en commentaire
   // const { name, portrait } = data;
   const { portrait,name, id, city, country, price,  tagline } = data;
   console.log(data.id);
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const a = document.createElement('a');
        const Artname = document.createElement( 'h2' ); 
        const Artcitycountry = document.createElement( 'div' );
        const Artprice = document.createElement( 'div' );
        const Arttagline = document.createElement( 'div' );
        
   
        img.setAttribute("src", picture)
        Artname.textContent = name;
        Artcitycountry.className = "Artcitycountry"
        Artcitycountry.textContent = city + ", " +country;
        Artprice.className = "Artprice"
        Artprice.textContent =price + "€/jour";
        Arttagline.className = "Arttagline"
        Arttagline.textContent = tagline;
        


        article.appendChild(img);
        article.appendChild(Artname);
        
        article.appendChild(Artcitycountry);
        article.appendChild(Arttagline);
        article.appendChild(Artprice);
       
        
        
        console.log(article)
        return (article);
      
    }
    
    return { portrait,name, id, country, price,  tagline ,
        getUserCardDOM} 
}