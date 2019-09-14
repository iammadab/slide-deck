let store = {
	currentSlide: null,
	largestId: null
}

;(function getInitData(){
	store.currentSlide = getCurrentSlide()
	store.largestId = getLargestSlideId()
})()

function getCurrentSlide(){
	let currentSlide = document.querySelector("img.active")
	return currentSlide
}

function getLargestSlideId(){
	let allSlides = document.querySelectorAll(".images img")
	return allSlides.length
}

function getNextId(id, largest){
	let next =  (id + 1) % largest
	return next ? next : largest
}

