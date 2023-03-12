const ChatGptClient = require("../Client/ChatGptClient");

class ChatGptService {
    constructor() {
        this.chatGptClient = new ChatGptClient()
    }

    _getDescription(vacancy, resulm) {
        return `ANALISE ESSA VAGA: 

        ${vacancy}
        
        ANALISE ESSE CURRÍCULO COM BASE NA VAGA:
        
        ${resulm}
         
        COM BASE NESSAS INFORMAÇÕES, ME DEVOLVA SOMENTE UM JSON CONTENDO AS INFORMAÇÕES:
        
        score - Campo numérico float, com 3 digitos depois da virgula, com a porcentagem de aptão 
        apto - Campo boolean dizendo se esse curriculo está apto ou não para a vaga
        description - Campo com uma justificativa do porque esse currículo é apto para a vaga ou não`
    }

    async gptResultAnalisys(request, response) {
        try {

            const resulm = await this.chatGptClient.gptCreateResumeText(request.body.resulm)
            const description = this._getDescription(request.body.vacancy, resulm.message)
            const result = await this.chatGptClient.gptAnalisysText(description)

            response.status(200).json(result)

        } catch (Exception) {
            console.log(`Error getResultAnalisys: ${Exception}`)
            response.status(404).json({ message: Exception, code: 404 })
        }

    }
}

module.exports = ChatGptService