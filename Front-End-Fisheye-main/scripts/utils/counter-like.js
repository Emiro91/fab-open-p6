
// Event to add likes
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('likeheart')) {

    incrementLike(e.target);
  }
});

// Add 1 heart to the media and photograph
function incrementLike(coeurIcon) {

  const compteur = coeurIcon.parentNode.querySelector('.btnlike');
  compteur.innerHTML = `${parseInt(compteur.innerHTML, 10) + 1} `;

 // document.querySelector('.compteurLikeTotal').innerHTML = `${totalLikes} ` + '<span class=\'fas fa-heart\'></span>';
  const compteurLikeTotal = document.querySelector('.compteurLikeTotal');
  compteurLikeTotal.innerHTML = `${parseInt(compteurLikeTotal.innerHTML, 10) + 1} ` + '<span class=\'fas fa-heart\'></span>';
}
 // Get likes of every media and add it to the sidebar
 function getTotalLikes(data) {
  let totalLikes = 0;

  data.forEach((media) => {
    totalLikes += media.likes;
  });
  // eslint-disable-next-line no-useless-concat
  document.querySelector('.compteurLikeTotal').innerHTML = `${totalLikes} ` + '<span class=\'fas fa-heart\'></span>';
}