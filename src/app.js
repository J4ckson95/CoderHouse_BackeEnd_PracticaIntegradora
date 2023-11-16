import express from "express"
import handlebars from "express-handlebars"
import __dirname from "./utils.js"
import guildRouter from "./routes/guildwar.router.js"

const app = express()
//? Configuración del motor de plantillas handlebars
app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + `/views`)
app.set("view engine", "handlebars")

app.get("/", (req, res) => res.render("index", {}))
app.get("/health", (req, res) => res.send("ok"))
app.get("/characters", guildRouter)


app.listen(1010, () => console.log("Runing ...<(--_--)>"))