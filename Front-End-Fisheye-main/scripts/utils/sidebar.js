 // Get likes of every media and add it to the sidebar
 function getTotalLikes(data) {
    let totalLikes = 0;

    data.forEach((media) => {
      totalLikes += media.likes;
    });
    // eslint-disable-next-line no-useless-concat
    document.querySelector('.compteurLikeTotal').innerHTML = `${totalLikes} ` + '<span class=\'fas fa-heart\'></span>';
  }