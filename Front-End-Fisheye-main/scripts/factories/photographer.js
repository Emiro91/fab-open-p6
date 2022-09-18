function photographerFactory(data) {
    const {
        id,
        name,
        portrait,
        city,
        country,
        tagline,
        price,
        title,
        image,
        likes,
        video,
    } = data;

    const picture = `assets/photographers/${portrait}`;

function getUserCardDOM() {
    const article = document.createElement('article');

    const img = document.createElement('img');
    img.setAttribute("src", picture)
    img.setAttribute("class", "card-img")

    const h2 = document.createElement('h2');
    h2.textContent = name;

    const h3 = document.createElement("h3");
    h3.textContent = `${city}, ${country}`;

    const h4 = document.createElement("h4");
    h4.textContent = tagline;

    const p = document.createElement("p");
    p.textContent = `${price}€/jour`;

    const ahref = document.createElement("a");
    ahref.setAttribute("class", "link");
    ahref.setAttribute("aria-label", `${name}`);
    ahref.setAttribute("href", `photographer.html?id=${id}`);

    ahref.appendChild(article);
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(p);

    return ahref;
}

function getProfilePage() {
    const photographHeader = document.createElement("div");
    photographHeader.setAttribute("class", "photograph-header");

    const mainInfos = document.createElement("div");
    mainInfos.setAttribute("class", "photograph-infos");
    mainInfos.setAttribute("tabindex", "0");

    const fullname = document.createElement("h1");
    fullname.setAttribute("class", "names");
    fullname.textContent = name;

    const location = document.createElement("div");
    location.setAttribute("class", "location");
    const villePays = document.createElement("span");
    villePays.textContent = city.concat(", ", country);
    const bio = document.createElement("p");
    bio.textContent = tagline;

    const contactButton = document.createElement("button");
    contactButton.setAttribute("id", "contact_button");
    contactButton.setAttribute("class", "contact_button");
    contactButton.setAttribute("onclick", "displayModal()");
    contactButton.textContent = "Contactez-moi";

    const profileImg = document.createElement("img");
    profileImg.setAttribute("src", `assets/photographers/${portrait}`);
    profileImg.setAttribute("class", "photographImg");
    profileImg.setAttribute("alt", name);
    profileImg.setAttribute("tabindex", "0");

    const priceLikes = document.createElement("div");
    priceLikes.setAttribute("class", "price");
    const likesSpan = document.createElement("span");
    likesSpan.setAttribute("class", "compteurLikeTotal");

    const heart = document.createElement("span");
    heart.setAttribute("aria-label", "likes");
    heart.setAttribute("class", "fas fa-heart");
    const priceDay = document.createElement("span");
    priceDay.textContent = `${price}€ /jour`;

    photographHeader.appendChild(mainInfos);
    mainInfos.appendChild(fullname);
    mainInfos.appendChild(location);
    location.appendChild(villePays);
    location.appendChild(bio);
    photographHeader.appendChild(contactButton);
    photographHeader.appendChild(profileImg);

    photographHeader.appendChild(priceLikes);
    priceLikes.appendChild(likesSpan);
    likesSpan.appendChild(heart);
    priceLikes.appendChild(priceDay);
    return photographHeader;
}

function getmediasPage(){

    
    const jpg = `assets/images/media/${image}`;
    const mp4 = `assets/images/media/${video}`;
    const li=document.createElement("li");       
    const ahref=document.createElement("a");
    ahref.setAttribute("class","cards-media-img");
    ahref.setAttribute("role","button");
    ahref.setAttribute("title",title);
    ahref.setAttribute("aria-describedby","ouvrir le slider");
    ahref.setAttribute("href","#");
    const titlep=document.createElement("p");
    titlep.setAttribute("class","cards-media-title");
    titlep.textContent= title ;                       
    const div=document.createElement("div");
    div.setAttribute("class","header-like");
    const compteurp= document.createElement("p")
    compteurp.setAttribute("class","compteur"); 
    compteurp.setAttribute("aria-label","Nombre de likes 300");
    compteurp.setAttribute("tabindex","0>300<");
    compteurp.textContent= `${likes}`;                   
    const button=document.createElement("button");
    button.setAttribute("class","heart-link");
    button.setAttribute("aria-label","aimer cette photo");
    button.setAttribute("role","button");
    button.setAttribute("tabindex","0");
    const i=document.createElement ("i");
    i.setAttribute("class","heart far fa-heart");

    // If JPG -> <img>
    if (jpg.split('.').pop() === 'jpg') {
        const img = document.createElement('img');
        img.setAttribute('class', 'media-img');
        img.setAttribute('src', jpg);
        img.setAttribute('alt', title);
        img.setAttribute('tabindex', '0');
        
        li.appendChild(ahref);
        li.appendChild(img);
        li.appendChild(div);
        div.appendChild(titlep);
        div.appendChild(compteurp);
        compteurp.appendChild(button);
        button.appendChild(i);
        }
    // If MP4 -> <video>
    if (mp4.split('.').pop() === 'mp4') {
        const videoPlayer = document.createElement('video');
        videoPlayer.setAttribute('controls', '');
        videoPlayer.setAttribute('class', 'lightboxMedia');
        const source = document.createElement('source');
        source.setAttribute('src', mp4);
        source.setAttribute('type', 'video/mp4');
        source.setAttribute('class', 'lightboxImg');
        source.setAttribute('tabindex', '0');
        

        
        li.appendChild(ahref);
        li.appendChild(videoPlayer);
        videoPlayer.appendChild(source);
        li.appendChild(div);
        div.appendChild(titlep);
        div.appendChild(compteurp);
        compteurp.appendChild(button);
        button.appendChild(i);
        /*album.appendChild(videoPlayer);
        videoPlayer.appendChild(source);
        album.appendChild(caption);
        caption.appendChild(albumTitle);
        caption.appendChild(like);
        like.appendChild(compteur);
        like.appendChild(heart);*/
        }
        
    return li;
}
               
    return {
        id,
        name,
        picture,
        city,
        country,
        tagline,
        price,
        getUserCardDOM,
        getProfilePage,
        getmediasPage,
    }

};
