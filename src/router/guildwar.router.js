import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    res.render("list", { characters: [] })
})
router.get("/register", (req, res) => {
    res.render("register", {})
})
router.get("/:name", (req, res) => {
    res.render("breed",
        {characters: {
        name: Norn,
        photo: ""}
    }
    )
})
export default router