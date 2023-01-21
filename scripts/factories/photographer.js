
function photographerFactory(data) {
    //existant mis en commentaire
   // const { name, portrait } = data;
   const { portrait,name, id, city, country, price,  tagline } = data;
   console.log(data);
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const a = document.createElement('a');
        const Artname = document.createElement( 'h2' ); 
        const Artcity = document.createElement( 'div' );
        const Artcountry = document.createElement( 'div' );
        const Artprice = document.createElement( 'div' );
        const Arttagline = document.createElement( 'div' );
        
   
        img.setAttribute("src", picture)
        Artname.textContent = name;
        Artcity.textContent = city;
        Artcountry.textContent = city + ", " +country;
        Artprice.textContent =price + "€/jour";
        Arttagline.textContent = tagline;
        


        article.appendChild(img);
        article.appendChild(Artname);
        
        article.appendChild(Artcountry);
        article.appendChild(Arttagline);
        article.appendChild(Artprice);
       
        
        
        
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