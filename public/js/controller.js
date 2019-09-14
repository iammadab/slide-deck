;(function attachEvents(){
	// window.addEventListener("dbclic")
})()

function toggleFullScreen(){
	if(!document.fullscreenElement)
		document.documentElement.requestFullscreen()
	else if(document.exitFullscreen)
		document.exitFullscreen()
}