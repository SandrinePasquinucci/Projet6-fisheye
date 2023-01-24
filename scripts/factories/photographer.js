

function photographerFactory(data) {
 
   const { portrait,name, id, city, country, price,  tagline } = data;
   
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( "article" );
        const img = document.createElement( "img" );
        const a = document.createElement("a");
        const Artname = document.createElement( "h2" ); 
        const Artcitycountry = document.createElement( "div" );
        const Artprice = document.createElement( "div" );
        const Arttagline = document.createElement( "div" );
        const link = document.createElement ("a");
        
        link.setAttribute("href", `photographer.html?id=${id}`);
        img.setAttribute("src", picture);
        Artname.textContent = name;
        Artcitycountry.className = "Artcitycountry"
        Artcitycountry.textContent = city + ", " +country;
        Artprice.className = "Artprice";
        Artprice.textContent =price + "€/jour";
        Arttagline.className = "Arttagline";
        Arttagline.textContent = tagline;
        
        article.appendChild(img);
        article.appendChild(Artname);
        article.appendChild(Artcitycountry);
        article.appendChild(Arttagline);
        article.appendChild(Artprice);
       
        link.appendChild(article);
        
        console.log(article);
        return link;
      
    }
    
    return { portrait,name, id, country, price,  tagline ,
        getUserCardDOM} 
}


