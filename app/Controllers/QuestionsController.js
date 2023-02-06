import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

export class QuestionsController {

    constructor() {
        this.getQuestions()
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()
        } catch (error) {
            Pop.error(error)
        }
    }
}