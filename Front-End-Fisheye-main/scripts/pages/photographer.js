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
    photographer.forEach((media) => {


    const mediaModel = photographerFactory(media);
    const medias = mediaModel.getmediasPage();
    mediaSection.appendChild(medias);
});

};

async function init() {
    // Récupère les datas des photographes
    const photographer = await getPhotographer();
    displayData(photographer.photographers);
    medialist(photographer.media);
};

init();



