let store = {
	currentSlide: null,
	largestId: null,
	keyMap: {
		"next": next,
		"arrowright": next, 
		"enter": next,
		" ": next,
		"n": next,
		"prev": prev,
		"arrowleft": prev, 
		"p": prev,
		"f": toggleFullScreen
	}
}

;(function getInitData(){
	store.currentSlide = getCurrentSlide()
	store.largestId = getLargestSlideId()
})()

;(function addTouchEvents(){
	window.addEventListener("keydown", (event) => {
		executeAction(event.key)
	})
})()

;(function connectToSocketIO(){
	var socket = io.connect()
	socket.on("action", data => {
		executeAction(data.action)
	})
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

function getPrevId(id, largest){
	let prev = +id - 1
	// When the previous number is 0 I return the largest number
	return prev ? prev : largest
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

function prev(){
	activateSlide(getPrevId(store.currentSlide.dataset.id, store.largestId))
}

function executeAction(action){
	if(store.keyMap[action.toLowerCase()])
			store.keyMap[action.toLowerCase()]()
}

function toggleFullScreen(){
	if(!document.fullscreenElement)
		document.documentElement.requestFullscreen()
	else if(document.exitFullscreen)
		document.exitFullscreen()
}