

/*document.getElementById('btn').addEventListener('click', function(){
  var i = document.getElementById("like").innerHTML;
  i++;
    document.getElementById("like").innerHTML = i;
})*/

/*var number = 1;

function plusOne(like) {
  number++;
  like.textContent = number.toString();
}*/

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