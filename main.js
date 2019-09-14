const express = require("express")
const path = require("path")
const fs = require("fs")
const { promisify } = require("util")

const app = express()
const server = require("http").createServer(app)
const io = require("socket.io").listen(server)

const PORT = 3000

app.use(express.static(path.resolve(__dirname, "public")))
app.set("view engine", "ejs")


io.on("connection", socket => {
	socket.on("action", data => {
		io.emit("action", data)
	})
})


// Application Routes
app.get("/", (req, res) => {
	res.render("slider-info")
})

app.get("/slides", async (req, res) => {
	let images = await getImages()
	res.render("slider", { images })
})

app.get("/slides/controller", (req, res) => {
	res.render("slider-controller")
})





server.listen(PORT, () => {
	console.log("Application listening at port " + PORT)
})






// Helper functions
async function getImages(){
	let readdir = promisify(fs.readdir)
	let imageNames = await readdir(path.resolve(__dirname, "public", "img"))
	return imageNames.map(renameImage)
}

function renameImage(current){
	return `/img/${current}`
}