const express = require("express")
const path = require("path")
const ejs = require("ejs")

const app = express()

const PORT = 3000

app.use(express.static(path.resolve(__dirname, "public"))))
app.use("view engine", ejs)

app.get("/", (req, res) => {
	res.render("slider")
})

app.listen(PORT, () => {
	console.log("Application listening at port " + PORT)
})