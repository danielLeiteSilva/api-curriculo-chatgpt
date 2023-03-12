const { expect } = require('chai')

const ChatGptClient = require('../src/Client/ChatGptClient')

describe("Test class ChatGptClient", function () {

    let chatGptTestClient = {}
    let text = ""

    beforeEach("Instance class ChatGptClient", function () {
        chatGptTestClient = new ChatGptClient()
        text = `ANALISE ESSA VAGA: 

        Test
        
        ANALISE ESSE CURRÍCULO COM BASE NA VAGA:
        
        Test
         
        COM BASE NESSAS INFORMAÇÕES, ME DEVOLVA SOMENTE UM JSON CONTENDO AS INFORMAÇÕES:
        
        score - Campo numérico float, com 3 digitos depois da virgula, com a porcentagem de aptão 
        apto - Campo boolean dizendo se esse curriculo está apto ou não para a vaga
        description - Campo com uma justificativa do porque esse currículo é apto para a vaga ou não`
    })

    it("return generatePayload type", function () {
        const response = chatGptTestClient.generatePayloadText("Test")
        expect(response.body).to.be.a("string")
    })

    it("return gptCreateResumeText 200", function (done) {
        this.timeout(10000);
        chatGptTestClient.gptCreateResumeText("Test")
        .then(response => {
            expect(response.code).to.be.equals(200)
            done()
        })
    })

    it("return gptCreateResumeText 401", function (done) {
        this.timeout(10000);
        chatGptTestClient.token = "0000"
        chatGptTestClient.gptCreateResumeText(Object)
        .then(response => {
            expect(response.code).to.be.equals(401)
            done()
        })
    })

    it("return gptCreateResumeText 404", function (done) {
        this.timeout(10000);
        chatGptTestClient.url = "0000"
        chatGptTestClient.gptCreateResumeText(Object)
        .then(response => {
            expect(response.code).to.be.equals(404)
            done()
        })
    })

    it("return gptAnalisysText 200", function (done) {
        this.timeout(10000);
        chatGptTestClient.gptAnalisysText(text)
        .then(response => {
            expect(response.code).to.be.equals(200)
            done()
        })
    })

    it("return gptAnalisysText 401", function (done) {
        this.timeout(10000);
        chatGptTestClient.token = "0000"
        chatGptTestClient.gptAnalisysText(Object)
        .then(response => {
            expect(response.code).to.be.equals(401)
            done()
        })
    })

    it("return gptAnalisysText 404", function (done) {
        this.timeout(10000);
        chatGptTestClient.url = "0000"
        chatGptTestClient.gptAnalisysText(Object)
        .then(response => {
            expect(response.code).to.be.equals(404)
            done()
        })
    })
})