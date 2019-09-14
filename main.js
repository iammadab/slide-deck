const express = require("express")
const path = require("path")

const app = express()
const server = require("http").createServer(app)
const io = require("socket.io").listen(server)

const PORT = 3000

app.use(express.static(path.resolve(__dirname, "public")))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
	res.render("slider-info")
})

app.get("/slides", (req, res) => {
	res.render("slider")
})

server.listen(PORT, () => {
	console.log("Application listening at port " + PORT)
})