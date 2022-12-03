async function getPhotographer() {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

  // Récupérées les données photographes dans le json
  const photographerData = await (
    fetch('./data/photographers.json')
    .then((response) => response.json())
  );
  photographerData.photographers = photographerData.photographers.filter(
    (photographer) => photographer.id == id
  )[0];
  photographerData.media = photographerData.media.filter(
    (media) => media.photographerId == id
  );
  return photographerData;


}

async function displayData(photographer) {
  const photographersSection = document.getElementById("photographeProfile");
  const profileModel = photographerFactory(photographer);
  const profiles = profileModel.getProfilePage();
  photographersSection.appendChild(profiles);
};

async function medialist(photographer) {
  const mediaSection = document.getElementById("medialist");
  mediaSection.innerHTML = '';
  photographer.forEach((media) => {


    const mediaModel = photographerFactory(media);
    const medias = mediaModel.getmediasPage();
    mediaSection.appendChild(medias);
  });

  getTotalLikes(photographer);
};

//const selectbox = document.getElementById("selectbox");


async function init() {
  // Récupère les datas des photographes
  const photographer = await getPhotographer();
  displayData(photographer.photographers);
  medialist(photographer.media);
  /*  selectbox.addEventListener("change", (e) => {
        let photographerMediaList = mediaFilter(photographer.media, e.target.value);
        console.log("photographer media", photographerMediaList);
        medialist(photographerMediaList);
    });*/
  document.getElementById('dropdown-content').addEventListener('click', (e) => {
    console.log(e, e.target.id);
    // titre
    let cibleData = document.getElementById('sort-button-content').innerHTML;

    document.getElementById('sort-button-content').innerHTML = e.target.innerHTML;
    let photographerMediaList = mediaFilter(photographer.media, e.target.innerHTML.toLowerCase());
    e.target.innerHTML = cibleData;




    /*document.getElementById('sort-button-content').innerHTML = e.target.innerHTML;
    console.log(e.target.innerHTML);
    mediaArray = mediaFilter(e.target.id, mediaArray);*/
    // displayMediaData(mediaArray);

    console.log("photographer media", photographerMediaList);
    medialist(photographerMediaList);
  });

  // Event to add likes with keyboard
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      if (e.target.classList.contains('incrementLike')) {
        incrementLike(e.target);
      }
    }
  });

  // Init Lightbox on click
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightboxMedia')) {
      initLightbox();
    }
  });
  // Init Lightbox with keyboard
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      if (e.target.classList.contains('lightboxMedia')) {
        initLightbox();
      }
    }
  });
}

init();