function openModal() {
	let x = window.matchMedia("(min-width: 768px)");
	function myFunction(x) {
		
		if (x.matches) {
				document.getElementById("myModal").style.display = "block";
				document.querySelectorAll(".modalSlides").style.display = "block";
		} else {
			document.getElementById("myModal").style.display = "none";
			document.querySelectorAll(".modalSlides").style.display = "none";
		}
	}
	myFunction(x);
	x.addListener(myFunction);
}
// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
	let modalSlides = document.getElementsByClassName("modalSlides");
  let dots = document.getElementsByClassName("thumbnail");
	let modalDots = document.getElementsByClassName("modalThumbnail");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
	if (n > modalSlides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = modalSlides.length}
  for (i = 0; i < modalSlides.length; i++) {
    modalSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = 0; i < modalDots.length; i++) {
    modalDots[i].className = modalDots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  modalSlides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  modalDots[slideIndex-1].className += " active";
}