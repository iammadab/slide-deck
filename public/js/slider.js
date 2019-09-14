let store = {
	currentSlide: null
}

getCurrentSlide()

function getCurrentSlide(){
	let currentSlide = document.querySelector("img.active")
	store.currentSlide = currentSlide
}

