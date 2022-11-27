// Event to sort media
document.getElementById('dropdown-content').addEventListener('click', (e) => {
	document.getElementById('sort-button-content').innerHTML = e.target.innerHTML;
	mediaArray = sortMedia(e.target.id, mediaArray);
	displayMediaData(mediaArray);
	});
	
	// Event to sort media with keyboard
	let isDropDownOpen = false;
	document.getElementById('dropdown-content').addEventListener('keydown', (e) => {
	if (e.code === 'Enter') {
	if (isDropDownOpen === false) {
	isDropDownOpen = true;
	document.getElementById('dropdown-content').style.display = 'block';
	document.querySelectorAll('.dropdown_option').forEach((element) => {
	element.addEventListener('keydown', (event) => {
	if (event.code === 'Enter') {
	mediaArray = sortMedia(element.id, mediaArray);
	document.getElementById('sort-button-content').innerHTML = element.innerHTML;
	}
	});
	});
	} else {
	document.getElementById('dropdown-content').style.display = 'none';
	isDropDownOpen = false;
	}
	displayMediaData(mediaArray);
	}
	});
	
	// Event to add likes
	document.addEventListener('click', (e) => {
	if (e.target.classList.contains('incrementLike')) {
	incrementLike(e.target);
	}
	});
	
	// Event to add likes with keyboard
	document.addEventListener('keydown', (e) => {
	if (e.code === 'Enter') {
	if (e.target.classList.contains('incrementLike')) {
	incrementLike(e.target);
	}
	}
	});