import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js"
import { trivia_api } from "./AxiosService.js";

class QuestionsService {

    async getQuestions() {
        const res = await trivia_api.get('api.php?amount=50&category=9&difficulty=medium&type=multiple')
        appState.questions = res.data.results
        console.log(appState.questions)
    }

    findQuestion() {
        let questions = appState.questions
        let randomIndex = Math.floor(Math.random() * questions.length)
        console.log(randomIndex)
        let randomQuestion = questions[randomIndex]
        appState.posedQuestion = randomQuestion
        appState.askedQuestions.push(randomQuestion)
        console.log(appState.askedQuestions)
    }
}

export const questionsService = new QuestionsService();