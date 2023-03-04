const ChatGptService = require("../Services/ChatGptService");

class ChatGptController{
    constructor(){
        this.chatGptService = new ChatGptService()
    }

    async getResultAnalisysText(request, response){
        this.chatGptService.gptResultAnalisys(request, response)
    }

}


module.exports = new ChatGptController