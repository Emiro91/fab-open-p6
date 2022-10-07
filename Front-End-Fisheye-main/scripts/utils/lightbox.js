/*const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
});

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
});*/

function lightBox() {
	let slideIndex = 0; // INITIALIZE THE ROTATION OF SLIDES
	showSlides(slideIndex);
	function showSlides(n) {
	let i = 0;
	let slides = document.getElementsByClassName("mySlides");
	if (slideIndex < 1) {
	slideIndex = slides.length; // ROTATION
	}
	if (slideIndex > slides.length) {
	slideIndex = 1;
	}
	if (n < 1) {
	slideIndex = slides.length;
	}
	if (n > slides.length) {
	slideIndex = 1;
	}
	for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "flex";
	document.onkeydown = checkKey; // KEYBOARD CONTROL
	function checkKey(e) {
	e = e || window.event;
	
	if (e.keyCode == "27") {
	document.getElementById("myModal").style.display = "none";
	} else if (e.keyCode == "37") {
	showSlides(slideIndex--);
	} else if (e.keyCode == "39") {
	showSlides(slideIndex++);
	}
	}
	}
	
	let lightBoxImg = document.querySelectorAll(".imgMin"); // OPEN LIGHTBOX
	let c = 1;
	lightBoxImg.forEach(function (item) {
	item.setAttribute("id", c);
	item.addEventListener("click", function modalRotation() {
	document.getElementById("myModal").style.display = "flex";
	let m = item.id;
	slideIndex = m;
	showSlides(slideIndex);
	});
	c++;
	});
	let plusSlides = document.getElementById("plusSlides"); // LIGHTBOX CONTROLS
	plusSlides.addEventListener("click", function plusSl() {
	showSlides(slideIndex++);
	});
	let prevSlides = document.getElementById("prevSlides");
	prevSlides.addEventListener("click", function prevSl() {
	showSlides(slideIndex--);
	});
	
	let closeModal = document.getElementById("closeModal");
	closeModal.addEventListener("click", function closeThis() {
	document.getElementById("myModal").style.display = "none";
	});
	}