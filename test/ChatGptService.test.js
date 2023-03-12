const { expect } = require('chai')

const ChatGptService = require('../src/Services/ChatGptService')

describe("Test class ChatGptService", function(){

    let chatGptService = {}

    beforeEach("Instance service", function(){
        chatGptService = new ChatGptService()
    })


    it("should _getDescription to string", function(){
        let response = chatGptService._getDescription("Test", "Test")
        expect(response).to.be.a("string")
    })

    it("should gptResultAnalisys to string", function(){
        let request = {
            body: {
                resulm: "Test",
                vacancy: "Test"
            }
        }
        let result = {
            status: function(code){
                return {
                    code,
                    json: function(value){
                        return value
                    }
                }
            }
        }
        chatGptService.gptResultAnalisys(request, result)
    })


    it("should gptResultAnalisys to catch", function(){
        chatGptService.gptResultAnalisys()
    })
})