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

};

const selectbox = document.getElementById("selectbox");

  // Get the number of likes of every medias
  /*const totalLikeModel = photographerFactory(photographerMedias);
  totalLikeModel.getTotalLikes();*/

  /*function likeMedia() {
	const likeButton = document.querySelectorAll('#likeButton');
	const likeCounter = document.querySelector('#likeCounter');
	for (let i = 0; i < likeButton.length; i++) {
		likeButton[i].addEventListener('click', function () {
			const classList = likeButton[i].classList;
			const liked = classList.toggle('liked');
			const oldValue = document.querySelectorAll('#likeNumber');
			if (liked) {
				const newValue = parseFloat(oldValue[i].innerText) + 1;
				oldValue[i].innerText = newValue;
				likeCounter.innerHTML = updatedSumOfLike();
			} else {
				const newValue = parseFloat(oldValue[i].innerText) - 1;
				oldValue[i].innerText = newValue;
				likeCounter.innerHTML = updatedSumOfLike();
			}                        
		});
	}
}

export function likeMediaV2() {
	const likeButton = document.querySelectorAll('#likeButton');
	const likeCounter = document.querySelector('#likeCounter');
	for (let i = 0; i < likeButton.length; i++) {
		likeButton[i].addEventListener('click', function () {
			const value = document.querySelectorAll('#likeNumber');
			const newValue = parseFloat(value[i].innerText) + 1;
			value[i].innerText = newValue;
			likeCounter.innerHTML = updatedSumOfLike();
		});
	}
}
*/
async function init() {
    // Récupère les datas des photographes
    const photographer = await getPhotographer();
    displayData(photographer.photographers);
    medialist(photographer.media);
    selectbox.addEventListener("change", (e) => {
        let photographerMediaList = mediaFilter(photographer.media, e.target.value);
        console.log("photographer media", photographerMediaList);
        medialist(photographerMediaList);
    });
};

init();