const ChatGptController = require("./Controller/ChatGptController")
const Helth = require("./Helth/Helth")

const Router = require("express").Router()

Router.get("/", Helth)

Router.post("/api/v1/gpt/analisys", async (req, res) => {
    await ChatGptController.getResultAnalisysText(req, res)
})


module.exports = Router