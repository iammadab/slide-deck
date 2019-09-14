let store = {
	controlPad: document.querySelector(".slider-controller-section"),
	socket: null
}

;(function getSocket(){
	store.socket = io.connect()
})()

;(function attachHammerEvents(){
	let hammertime = new Hammer(store.controlPad)
	hammertime.on("doubletap", toggleFullScreen)
	hammertime.on("swipeleft", executeLeft)
	hammertime.on("swiperight", executeRight)
})()

function executeRight(){
	if(store.socket)
		store.socket.emit("action", { action: "prev" })
}

function executeLeft(){
	if(store.socket)
		store.socket.emit("action", { action: "next" })
}

function toggleFullScreen(){
	if(!document.fullscreenElement)
		document.documentElement.requestFullscreen()
	else if(document.exitFullscreen)
		document.exitFullscreen()
}