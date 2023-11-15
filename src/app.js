import express from "express"
import handlebars from "express-handlebars"
import __dirname from "./utils.js"
import guildWarRouter from "./router/guildwar.router.js"

const app = express()
//? Configuración del motor de plantillas handlebars
app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + `/views`)
app.set("view engine", "handlebars")

app.get("/", (req, res) => res.render("index", {}))
app.get("/health", (req, res) => res.send("ok"))
app.get("/characters", guildWarRouter)


app.listen(1010, () => console.log("Runing ...<(-_-)>"))