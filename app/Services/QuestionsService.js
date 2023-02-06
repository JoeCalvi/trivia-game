import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js"
import { trivia_api } from "./AxiosService.js";

class QuestionsService {

    async getQuestions() {
        const res = await trivia_api.get('api.php?amount=50&category=9&difficulty=medium&type=multiple')
        console.log(res.data)
    }

}

export const questionsService = new QuestionsService();