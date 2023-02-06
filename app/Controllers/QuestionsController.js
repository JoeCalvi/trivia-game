import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuestion() {
    let template = ''
    template += `<h3>${appState.posedQuestion.question}</h3>`
    setHTML('question', template)
}


export class QuestionsController {

    constructor() {
        this.getQuestions()
    }

    findQuestion() {
        questionsService.findQuestion()
        _drawQuestion()
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()
        } catch (error) {
            Pop.error(error)
        }
    }
}