const ChatGptController = require("./Controller/ChatGptController")
const Helth = require("./Helth/Helth")
const cors = require('cors')

const Router = require("express").Router()

Router.get("/", Helth)

const corsOptions = {
    origin: 'https://analise-curriculo-front.vercel.app',
    optionsSuccessStatus: 200
}

Router.post("/api/v1/gpt/analisys", cors(corsOptions), async (req, res) => {
    await ChatGptController.getResultAnalisysText(req, res)
})


module.exports = Router
