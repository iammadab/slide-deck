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
	let next =  (+id + 1) % +largest
	// When the next number is the number just before the last, the above returns 0 
	// What I want is the largest
	// So the tenary operator below is saying if the number is 0 return the largest else return the number
	return next ? next : +largest
}

function activateSlide(id){
	let slideToActivate = document.querySelector(`[data-id="${id}"]`)
	store.currentSlide.classList.remove("active")
	slideToActivate.classList.add("active")
	store.currentSlide = slideToActivate
}

function next(){
	activateSlide(getNextId(store.currentSlide.dataset.id, store.largestId))
}