let store = {
	currentSlide: null
}

getCurrentSlide()

function getCurrentSlide(){
	let currentSlide = document.querySelector("img.active")
	store.currentSlide = currentSlide
}

function getLargestSlideId(){
	let allSlides = document.querySelectorAll(".images img")
	return allSlides.length - 1
}

