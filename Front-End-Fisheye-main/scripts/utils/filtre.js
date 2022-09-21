function mediaFilter(mediaListArrayFiltered, photographerItem) {

	//const currentFilter = document.getElementById('currentFilter');
	//const observer = new MutationObserver(function () {

		//const newFilterValue = currentFilter.innerHTML;
		//const mediaList = document.querySelector('.photographer-page__media');
		//mediaList.innerHTML = '';
        

		if (photographerItem === 'Date') { 
			const mediaListArrayFilteredByUser = mediaListArrayFiltered.sort(function (a, b) {return new Date(b.date) - new Date(a.date);});
			medialist(mediaListArrayFilteredByUser);  
            
            
		}

		if (photographerItem === 'Popularite') {
			const mediaListArrayFilteredByUser = mediaListArrayFiltered.sort(function (a, b) { return a.likes - b.likes;});
			medialist(mediaListArrayFilteredByUser);
            
            
		}
    
		if (photographerItem === 'Titre') {
			const mediaListArrayFilteredByUser = mediaListArrayFiltered.sort(function (a, b) {
				let x = a.alt;
				let y = b.alt;
				if (x < y) return 1;
				if (x > y) return -1;
				return 0;
			});
			medialist(mediaListArrayFilteredByUser);
            
            
		}
	//});

	//observer.observe(currentFilter, { subtree: true, childList: true });
}