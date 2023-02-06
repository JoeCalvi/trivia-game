import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuestion() {

}


export class QuestionsController {

    constructor() {
        this.getQuestions()
        _drawQuestion()
    }

    findQuestion() {
        questionsService.findQuestion()
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()
        } catch (error) {
            Pop.error(error)
        }
    }
}